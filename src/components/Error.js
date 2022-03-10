import React from "react";
import { Link } from "react-router-dom";
import Err from "../../src/error.jpg";
import Navbar from "./Navbar";

const Error = () => {
  return (
    <>
      <div className="container-fluid error">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12">
          <img className="w-100 h-100" src={Err} alt="error" />
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-8%" }}
          >
            <Link to="/">
              <button className="btn btn-lg btn-dark fs-4">Go to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
