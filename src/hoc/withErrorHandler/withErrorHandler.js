import React, { useState, useEffect } from "react";
import Overlay from "../../components/UI/Overlay/Overlay";
import Aux from "../Aux";

// remember everything is react should be treated like a function so this function should show the component that triggered the error and show the error its self
const withErrorHandler = (WrappedComponent, axios) => {
  // the class is anonymous becasue i dont use it i just return it, its a class factory essentially
  return props => {
    const [error, setError] = useState(null);
      // clear errors on every new request
      const reqInterceptor = axios.interceptors.request.use(req => {
        setError(null);
        return req;
      });
      const resInterceptor = axios.interceptors.response.use(res => res, err => {
          setError(err);
        }
      );
      useEffect(() => {
        // clean up whenever our interceptors change
        return () => {
          axios.interceptors.request.eject(reqInterceptor);
          axios.interceptors.response.eject(resInterceptor);
        }
      }, [reqInterceptor, resInterceptor]);
    
    const errorConfrimedHandler = () => {
      setError(null);
    };
  
      return (
        <Aux>
          <Overlay
            show={error}
            purchaseCancelled={errorConfrimedHandler}
          >
            {error ? error.message : null}
          </Overlay>
          <WrappedComponent {...props} />
        </Aux>
      );
    
  };
};
export default withErrorHandler;
