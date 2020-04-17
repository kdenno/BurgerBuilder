import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar";
import {connect} from "react-redux";
import SideDrawer from "../Navigation/Sidedrawer/Sidedrawer";

const layout = (props) => {
  const [SideDrawerIsVisible, setSideDrawerState] = useState(false);
  
  const SideDrawerClosedHandler = () => {
    setSideDrawerState(false);
  };
  const ToggleDrawer = () => {
    setSideDrawerState(!setSideDrawerState);
  };

    return (
      <Aux>
        <Toolbar isAuth = {props.isAuthenticated} drawerToggleClicked={ToggleDrawer} />
        <SideDrawer
          open={SideDrawerIsVisible}
          closed={SideDrawerClosedHandler}
          isAuth = {props.isAuthenticated}
        />
        <main className={styles.Content}>{props.children}</main>
      </Aux>
    );
  
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token
  }

}
export default connect(mapStateToProps)(layout);
