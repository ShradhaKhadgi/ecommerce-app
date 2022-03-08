import React from "react";
import Navbar from "./Navbar";
import Empty from "../../src/emptycart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid error">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12">
          <img className="w-100 h-100" src={Empty} alt="empty" />
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-8%" }}
          >
            <Link to="/">
              <button className="btn btn-lg btn-dark fs-4">Add Items</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
