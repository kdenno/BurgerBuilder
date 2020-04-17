import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

const checkout = (props) => {

  const CheckoutCancelledHandler = () => {
    // since this component was loaded by router, we have access to props.history
    props.history.goBack();
  };
  const CheckoutContinuedHander = () => {
    props.history.replace("/checkout/contact-data");
  };

 
    let summary = <Redirect to="/" />;
    if (props.ings) {
      const finishedPurchase = props.purchased ? <Redirect to="/"/> : null
      summary = (
       
        <div>
           {finishedPurchase}
          <CheckoutSummary
            ingredients={props.ings}
            CheckoutCancelled={CheckoutCancelledHandler}
            CheckoutContinued={CheckoutContinuedHander}
          />
          <Route
            path={props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};


export default connect(mapStateToProps)(checkout);
