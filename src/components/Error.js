import React from "react";
import { useNavigate } from "react-router-dom";
import Err from "../../src/error.jpg";

const Error = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="container-fluid error">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12">
          <img className="w-100 h-100" src={Err} alt="error" />
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-8%" }}
          >
            <button
              className="btn btn-lg btn-dark fs-4"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
