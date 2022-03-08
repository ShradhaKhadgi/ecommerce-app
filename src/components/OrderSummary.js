import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const OrderSummary = ({ display }) => {
  const { cartTotal } = useCart();
  return (
    <>
      <div className="col-lg-4 col-md-5 col-sm-11 col-10 mt-5 mb-5 mx-auto">
        <div className="order_details fs-4 p-5">
          <h1 className="mb-5">Order Summary</h1>
          <div className="d-flex justify-content-between">
            <p>Total MRP</p>
            <p>Rs. {cartTotal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping</p>
            <p>{`Rs. 50`}</p>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <p>Shipping Discount</p>
            <p>{`- Rs. 50`}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-5">
            <strong>Total Amount</strong>
            <strong>Rs. {cartTotal}</strong>
          </div>
          <Link to="/checkout" style={{ display: display }}>
            <div className="d-grid">
              <button className="btn btn-lg btn-outline-dark">Checkout</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
