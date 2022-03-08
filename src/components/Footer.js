import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../../src/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid p-4 footer border-top mt-5">
        <div className="container p-0">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-md-12 col-sm-12 my-4">
              <img
                src={Logo}
                style={{ width: "6rem", height: "6rem" }}
                alt="logo"
              />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sollicitudin et elit quis congue. Mauris interdum efficitur
                tellus, at efficitur urna interdum bibendum. Nulla facilisi.
                Donec vitae consectetur nisl, vel eleifend tortor. Cras sit amet
                finibus leo. Praesent at rhoncus mauris.
              </p>
              <div className="d-flex justify-content-between w-25">
                <FaFacebook className="display-6 " />
                <AiFillInstagram className="display-6" />
                <FaTwitter className="display-6" />
                <FaYoutube className="display-6" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-4">
              <h1>Useful Links</h1>
              <br />
              <div className="links float-start me-5 ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products/women">Women</Link>
                </li>
                <li>
                  <Link to="/products/men">Men</Link>
                </li>
                <li>
                  <Link to="/myorders">Orders</Link>
                </li>
              </div>
              <div className="links">
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-4">
              <h1>Contact</h1>
              <br />
              <MdLocationPin /> B-44 Pandara Road, New Delhi - 110003
              <br />
              <br />
              <BsTelephoneFill /> +91 8376856295
              <br />
              <br />
              <MdMail /> shradhakhadgi@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
