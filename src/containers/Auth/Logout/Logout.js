import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../../../store/actions/index";

const logout = (props) => {
  useEffect(() => {
    // trigger logout action
    props.onLogOut();
  }, []);

  return <Redirect to="/" />;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(Actions.logOut),
  };
};
export default connect(null, mapDispatchToProps)(logout);
