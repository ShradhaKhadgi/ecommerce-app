import React from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useCart } from "react-use-cart";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
const Cart = () => {
  const{
    isEmpty,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const json = localStorage.getItem("LoginUser");
  const user = JSON.parse(json);
  if(isEmpty || !user) return (
    <>
      <EmptyCart/>
    </>
  )
  return (
    <>
    <Navbar/>
      <div className="container prod mb-5">
        <div className="row">
          <div className="h2 text-center my-5 py-2 alert-secondary col-lg-12 col-11 col-sm-11 m-auto">Your Cart</div>  
          <div className="col-lg-7 col-md-6 col-sm-11 col-11 mx-auto">
          <div className="d-flex justify-content-between">
          <h4 className="mb-5">You have {totalItems} item in your cart</h4>
          <div>
          <button className="btn btn-lg btn-outline-dark" onClick={()=>emptyCart()}>Clear Cart</button>
          </div>
          </div>
          {
            items.map((elem,index)=>{
              return(
                <div className="d-flex mb-5 fs-4" key={index}>
              <div className="cart_img mx-2 img-fluid">
              <Link to={`/product/${elem.category}/${elem.title}/${elem.id}`}>
                <img
                  src={elem.img}
                  alt="img"
                  className="w-100 h-100"
                />
                </Link>
              </div>
              <div className="mx-5 w-75 prod_title">
                <strong>{elem.title}</strong>
                <p>Size: {elem.size}</p>
                <p className="fs-5">
                  Rs.{elem.price} <s className="mx-2">Rs. {elem.real_price}</s>
                  <span className="text-danger">({elem.discount})</span>
                </p>
                <div className="d-flex my-4">
                  <TiMinus className="fs-2 mx-2 icon" onClick={()=>updateItemQuantity(elem.id,elem.quantity-1)}/>
                  <div className="mx-2 fs-3 text-center border rounded-pill px-3">{elem.quantity}</div>
                  <TiPlus className="fs-2 mx-2 icon" onClick={()=>updateItemQuantity(elem.id,elem.quantity+1)}/>
                </div>
                <h3 className="ms-4">Rs.{elem.price * elem.quantity}</h3>
              </div>
              <div className="">
              <IoCloseSharp className="fs-2 mx-2 mt-3 icon" onClick={()=>removeItem(elem.id)}/>
              </div>
            </div>
              )
            })
          }
          </div>
          <OrderSummary display="block"/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
