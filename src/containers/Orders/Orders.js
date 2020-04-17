import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import * as Actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

const orders = (props) => {
  useEffect(() => {
    props.onFetchOrders(props.token);
  }, []);
 
    let orders = <Spinner />;
    if(!props.loading) {
      orders = (
        
        props.orders.map((order) => (
          <Order
            ingredients={order.ingredientes}
            price={order.price}
            key={order.id}
          />
        ))
      );

    }
    return (
      <div>
        {orders}
        
      </div>
    );
  
}
const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token) => dispatch(Actions.fetchOrders(token))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(orders, axios));
