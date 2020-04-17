import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Overlay from "../../components/UI/Overlay/Overlay";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as Actions from "../../store/actions/index";


const burgerBuilder = props => {
  state = {
    purchasing: false
  };
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    this.props.onInitIngredients();
  }, []);

  const updatePurchasable = (ingredients) => {
    const totalIngredientPrice = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return totalIngredientPrice > 0 ;
  }
  const purchasingHandler = () => {
    if(props.isAuthenticated) {
    setPurchasing(true);
  }else {
    props.setReturnPath('/checkout');
    props.history.push("/auth");
  }
  };
  purchaseCancelledHandler = () => {
    setPurchasing(false);
  };
  buyerActionHandler = action => {
    switch (action) {
      case "cancel":
        purchaseCancelledHandler();
        break;
      case "checkout":
        props.onCheckoutInit();
        props.history.push("/checkout");
        break;

      default:
        return null;
    }
  };

    let orderSummary = null;

    let burger = props.error ?<p>Ingredients cannot be fetched</p>: <Spinner />
 
    if (props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={props.ings} />
          <BuildControls
            ingredientAdded={props.onIngredientAdded}
            ingredientRemoved={props.onIngredientRemoved}
            price={props.price}
            purhasable={updatePurchasable(props.ings)}
            ordered={purchasingHandler}
            isAuth = {props.isAuthenticated}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          buyerAction={buyerActionHandler}
          ingredients={props.ings}
          price={props.price}
        />
      );
     
    }
    return (
      <Aux>
        <Overlay
          show={purchasing}
          purchaseCancelled={purchaseCancelledHandler}
        >
          {orderSummary}
        </Overlay>
        {burger}
      </Aux>
    );
  
}
const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    purchased: state.order.purchsed,
    isAuthenticated: state.auth.token,
    building: state.burgerBuilder.building
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(Actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(Actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(Actions.initIngredients()),
    onCheckoutInit: () => dispatch(Actions.checkoutInit()),
    setReturnPath: (path) => dispatch(Actions.setAuthRedirectPath(path))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));
