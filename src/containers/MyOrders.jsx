import React from "react";
import OrderListItem from "../components/OrderListItem";
import "../styles/MyOrders.scss";

const MyOrders = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My orders</h1>

        <div className="my-order-content">
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
