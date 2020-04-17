import React, { useState, useEffect } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./Auth.module.css";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import * as Actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as checks from "../../shared/utility";
 

const auth = props => {
  const [authForm, setAuthForm] = useState({
      email: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementtype: "input",
        elementconfig: {
          type: "password",
          placeholder: "Your Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 7,
        },
        valid: false,
        touched: false,
      },
   
    
  });
  const [isSignUp, SetIsSignUp] = useState(true);
  useState(() => {
    if(!props.building && props.authRedirectPath !== '/') {
      // user was not builidng, set route back to home page
      props.setReturnRoute('/');

    }

  }, []);

const onInputChangedHandler=(event, controlName) => {
    const updatedForm = {
        ...authForm,
        [controlName]: {
            ...authForm[controlName],
            value: event.target.value,
            touched: true,
            valid: checks.checkValidity(event.target.value, authForm[controlName].validation)
        }
    }
    setAuthForm(updatedForm);

}
const onsubmitHandler = (event) => {
    // prevent page reload
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignUp);

}
switchMode = () => {
  SetIsSignUp(!IsSignUp);
}

    let formArrayElements = [];
    for (let key in authForm) {
      formArrayElements.push({id: key, config: authForm[key]});
    }
    let form = formArrayElements.map(formElement => <Input 
        key={formElement.id}
        elementtype={formElement.config.elementtype}
        elementconfig={formElement.config.elementconfig}
        value={formElement.config.value}
        isvalid={formElement.config.valid} 
        shouldvalidate={formElement.config.validation}
        touched = {formElement.config.touched}
        changed={event => onInputChangedHandler(event, formElement.id)}/>);
        if(props.loading) {
            form = <Spinner/>
        }
        let errorMessage = null;
        if(props.error) {
        errorMessage = (<p>{props.error.message}</p>)

        }
        let routeAway = null;
        if(props.isAuthenticated) {
          
          routeAway = <Redirect to={props.authRedirectPath} />
        }
    return (
      <div className={styles.Auth}>
        {routeAway}
          {errorMessage}
        <form onSubmit={onsubmitHandler}>
            {form}
            <Button type="Success">SUBMIT</Button>
     </form>
      <Button type="Danger" clicked={switchMode}>SWITCH TO {isSignUp ? 'SIGN IN': 'SIGN UP'}</Button>
       
      </div>
    );
  
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token,
        building: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(Actions.auth(email, password, isSignUp)),
        setReturnRoute: (path) => dispatch(Actions.setAuthRedirectPath(path))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(auth);
