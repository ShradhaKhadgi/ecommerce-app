import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const EmptyOrder = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid error">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12">
          <img
            className="w-100 h-100"
            src="https://cdn.dribbble.com/users/357929/screenshots/2276751/media/10d453a085769f32ea4f5354b2cff4eb.png"
            alt="empty"
          />
          <div
            className="d-flex flex-column justify-content-center"
            style={{ marginTop: "-8%" }}
          >
            <div className="text-center">
              <h1 className="fw-bold">No order found</h1>
              <p className="fs-3">Looks like you haven't made your order yet</p>
            </div>
            <Link to="/" className="text-center">
              <button className="btn btn-lg btn-dark fs-4">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyOrder;
