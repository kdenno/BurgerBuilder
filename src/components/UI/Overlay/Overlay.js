import React, { Component } from "react";
import styles from "./Overlay.module.css";
import BackDrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const overlay = (props) => {
  // only reload this component if show changes
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== props.show || nextProps.children !== props.children; // .show is responsible for toggling the overlay but for spinner is toggled by some other property so we also check on whether there is an update on the overlay's children or else the spinner will fail to showup
  // }
    return (
      <Aux>
        <BackDrop
          show={props.show}
          backdropClicked={props.purchaseCancelled}
        />
        <div
          className={styles.Modal}
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0"
          }}
        >
          {props.children}
        </div>
      </Aux>
    );
  
}
export default React.memo(overlay);
