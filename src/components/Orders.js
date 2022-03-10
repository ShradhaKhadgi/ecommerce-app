import React from "react";
import EmptyOrder from "./EmptyOrder";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const json = localStorage.getItem("orderDetails");
  const order = JSON.parse(json);
  const json1 = localStorage.getItem("LoginUser");
  const user = JSON.parse(json1);
  let navigate = useNavigate();
  if (!order || order.item.length === 0 || !user)
    return (
      <>
        <EmptyOrder />
      </>
    );
  const date = order.date;
  const usr = order.user;
  const usrAddr = order.userAddress;
  const status = document.getElementsByClassName("status");
  const btn = document.getElementsByClassName("dbtn");
  const UpdateStatus = (id, index) => {
    status[index].innerHTML = "Processing...";
    btn[index].disabled = "true";
    setTimeout(() => changeStaus(id, index), 2000);
  };
  const changeStaus = (id, index) => {
    status[index].innerHTML = "Cancelled";
    setTimeout(() => DeleteOrder(id), 3000);
  };
  const DeleteOrder = (id) => {
    const data = order.item.filter((elem) => {
      return elem.id !== id;
    });
    localStorage.setItem(
      "orderDetails",
      JSON.stringify({ item: data, user: usr, date, userAddress: usrAddr })
    );
    let path = `/myorders`;
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div className="container prod">
        <h2 className="text-center bg-dark text-light p-3 mb-5 text-uppercase">
          My Orders
        </h2>
        {order.item.map((elem, index) => {
          return (
            <div key={elem.id}>
              <div className="row">
                <div className="col-11 d-flex justify-content-between m-auto fs-3">
                  <p>{order.date}</p>
                  <p className="text-info status">Processing</p>
                </div>
              </div>
              <div className="row justify-content-center mb-5">
                <div className="col-2 cart_img img-fluid">
                  <img
                    src={elem.img}
                    alt={elem.title}
                    className="w-100 h-100"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <div className="col-9 px-5 position-relative">
                  <h3 className="fw-bold">{elem.title}</h3>
                  <p className="fs-5 m-0">Size: {elem.size}</p>
                  <p className="fs-5">Qty: {elem.quantity}</p>
                  <br />
                  <h3 className="">Total Rs.{elem.itemTotal}</h3>
                  <div className="position-absolute end-0 bottom-0">
                    <button
                      className="btn btn-outline-dark fs-4 text-uppercase dbtn"
                      disabled={false}
                      onClick={() => {
                        UpdateStatus(elem.id, index);
                      }}
                    >
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
              <hr className="mb-5" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Orders;
