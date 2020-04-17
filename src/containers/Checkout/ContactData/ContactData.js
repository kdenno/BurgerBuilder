import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import {connect} from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../../axios-orders";
import * as orderActions from "../../../store/actions/order";
import * as checks from "../../../shared/utility";

const contactData = (props) => {
 cosnst [orderForm, setOrderForm] = useState({
      name: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipcode: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "zip code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementtype: "input",
        elementconfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliverymethod: {
        elementtype: "select",
        elementconfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        validation:{
          required: false
        },
        valid: true,
        value: "cheapest",

      }
    });
    const [formIsValid, setFormValid] = useState(false);
  
  const orderSubmitHandler = event => {
    event.preventDefault();

    props.onLoading();
    // transformd data and create something like {name: deno, country: uganda}
    const formData = {};
    for(let formElementIdentifier in orderForm){
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredientes: props.ings,
      price: props.price.toFixed(2),
      orderData: formData
    };
    props.onOrderBurger(order, props.token);
  };
 
  const onInputChangedHandler = (event, inputId) => {
    // let's try to get access to the input value and change it
    const updatedOrderForm = { ...orderForm }; // but remember this doenst do a deep clone
    // now that we got access to the top tier objects we need to clone again
    const updatedFormElement = { ...updatedOrderForm[inputId] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checks.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    let formValid = true;
    for(let eachkey in updatedOrderForm){
      formValid = updatedOrderForm[eachkey].valid && formValid;
    }
    updatedOrderForm[inputId] = updatedFormElement;
    setOrderForm(updatedOrderForm);
    setFormValid(formIsValid);
  };


    let formArrayElements = [];
    for (let key in orderForm) {
      formArrayElements.push({
        id: key,
        config: orderForm[key]
      });
    }
    let theform = (
      <form onSubmit={orderSubmitHandler}>
        {formArrayElements.map(formElement => (
          <Input
            key={formElement.id}
            elementtype={formElement.config.elementtype}
            elementconfig={formElement.config.elementconfig}
            value={formElement.config.value}
            isvalid={formElement.config.valid} 
            shouldvalidate={formElement.config.validation}
            touched = {formElement.config.touched}
            changed={event => onInputChangedHandler(event, formElement.id)}
          />
        ))}

        <Button type="Success" disabled={!formIsValid}> ORDER NOW </Button>
      </form>
    );
    if (props.loading) {
      theform = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h1>Enter Contact Details</h1>
        {theform}
      </div>
    );
  
}
const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
  onOrderBurger: (orderData, token) => dispatch(orderActions.purchaseBurgerStart(orderData, token)),
  onLoading: () => dispatch(orderActions.purchaseBurgerInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(contactData, axios));
