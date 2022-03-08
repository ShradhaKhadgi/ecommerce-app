import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "./data";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const location = useLocation();
  const prod_id = location.pathname.split("/")[4];
  const cat = location.pathname.split("/")[2];
  const filterProd = products.filter((elem) => {
    return elem.id == prod_id;
  });
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };
  const [size, setSize] = useState("");
  const { addItem, updateItem } = useCart();
  const handleSize = () => {
    const val = document.querySelector("#inputSelect").value;
    setSize(val);
  };
  const handleClick = (elem) => {
    const val = document.querySelector("#inputSelect").value;
    if (user) {
      if (val === "null") {
        toast("Select your size", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
        });
      } else {
        addItem(elem);
        updateItem(elem.id, { size });
      }
    } else {
      routeChange();
    }
  };
  const json = localStorage.getItem("LoginUser");
  const user = JSON.parse(json);
  return (
    <>
      <Navbar />
      <div className="container prod mb-5">
        {filterProd.map((elem) => {
          return (
            <div className="row" key={elem.id}>
              <div className="col-lg-6 col-md-6 col-sm-10 col-10 mx-auto">
                <div className="prod_img ">
                  <img
                    src={elem.img}
                    className="w-100 h-100"
                    alt={elem.title}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-11 col-11 mx-auto">
                <div className="prod_details">
                  <h2 className="mb-4 fw-bold">{elem.title}</h2>
                  <p className="mb-4 fs-5">{elem.desc}</p>
                  <h3 className="mb-5">
                    <b>Rs. {elem.price}</b>{" "}
                    <s className="mx-2">Rs. {elem.real_price}</s>
                    <span className="text-danger">({elem.discount})</span>
                  </h3>
                  <div className="d-flex mb-5">
                    <div className="d-flex">
                      <label className="h3">Select Size: </label>
                      <select
                        id="inputSelect"
                        onChange={handleSize}
                        className="form-select form-select-lg mx-5"
                      >
                        <option value="null">Size</option>
                        {cat === "Footwear" ? (
                          <>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </>
                        ) : cat === "Sarees" || cat === "Handbags" ? (
                          <option value="Onesize">One Size &nbsp;&nbsp;</option>
                        ) : (
                          <>
                            <option value="XL">XL </option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="SM">SM</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                  <button
                    className="btn btn-lg btn-outline-dark"
                    onClick={() => handleClick(elem)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          className="fs-4"
        />
      </div>
      <Footer />
    </>
  );
};

export default Product;
