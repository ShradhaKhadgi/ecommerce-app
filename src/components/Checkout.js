import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import OrderSummary from "./OrderSummary";
import { useCart } from "react-use-cart";
import { FcCheckmark } from "react-icons/fc";

const Checkout = () => {
  const { items, emptyCart } = useCart();
  const m = new Date().toUTCString().split(" ")[2];
  const d = new Date().getDate();
  const y = new Date().getFullYear();
  const date = `${d} ${m}, ${y}`;
  const json = localStorage.getItem("LoginUser");
  const user = JSON.parse(json);
  const [userAddress, setUserAddress] = useState({
    fname: "",
    lname: "",
    addr1: "",
    addr2: "",
    city: "",
    state: "",
    zip: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserAddress({ ...userAddress, [name]: value });
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  const numAllow = (e) => {
    if (!/[0-9]/.test(e.key) || e.code === "Space") {
      e.preventDefault();
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "orderDetails",
      JSON.stringify({ items, user, date, userAddress })
    );
    emptyCart();
  };

  return (
    <>
      <Navbar />
      <div className="container prod">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-11 col-11 mx-auto">
            <h2 className="p-5 text-uppercase">Delivery Address</h2>
            <div className="p-5">
              <form className="row g-3 fs-4" onSubmit={submitForm}>
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    value={userAddress.fname}
                    onChange={handleInput}
                    className="form-control shadow-none fs-5"
                    id="inputPassword4"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    value={userAddress.lname}
                    onChange={handleInput}
                    className="form-control shadow-none fs-5"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address 1</label>
                  <input
                    type="text"
                    name="addr1"
                    value={userAddress.addr1}
                    onChange={handleInput}
                    className="form-control shadow-none fs-5"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address 2</label>
                  <input
                    type="text"
                    name="addr2"
                    value={userAddress.addr2}
                    onChange={handleInput}
                    className="form-control shadow-none fs-5"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    required
                  />
                </div>
                <div className="col-4">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    value={userAddress.city}
                    onChange={handleInput}
                    className="form-control shadow-none fs-5"
                    id="inputCity"
                    required
                  />
                </div>
                <div className="col-4">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    value={userAddress.state}
                    onChange={handleInput}
                    className="form-control shadow-none fs-5"
                    id="inputCity"
                    required
                  />
                </div>
                <div className="col-4">
                  <label className="form-label">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    value={userAddress.zip}
                    onChange={handleInput}
                    maxLength={6}
                    onKeyPress={numAllow}
                    className="form-control shadow-none fs-5"
                    id="inputZip"
                    required
                  />
                </div>
                <div className="col-11">
                  <br />
                  <button
                    type="submit"
                    disabled={
                      !(
                        userAddress.fname.length !== 0 &&
                        userAddress.lname.length !== 0 &&
                        userAddress.addr1.length !== 0 &&
                        userAddress.addr2.length !== 0 &&
                        userAddress.city.length !== 0 &&
                        userAddress.state.length !== 0 &&
                        userAddress.zip.length !== 0
                      )
                    }
                    className="btn btn-dark me-5 fs-5"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Save And Deliver Here
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-dark fs-5"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <OrderSummary display="none" />
          <div
            className="modal fade bg-secondary"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <FcCheckmark className="display-3 my-3" />
                  <h4 className="fw-bold">Thanks for your order!</h4>
                  <p className="fs-5 mt-4 m-0">
                    Your order has been received!{" "}
                  </p>
                  <p className="fs-5">
                    We will send you and update when it ships
                  </p>
                </div>
                <div className="text-center mt-4 mb-5">
                  <button
                    type="button"
                    className="btn btn-success fs-5"
                    data-bs-dismiss="modal"
                    onClick={routeChange}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
