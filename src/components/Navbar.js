import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../src/logo.png";
import { useCart } from "react-use-cart";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { totalUniqueItems } = useCart();
  const json = localStorage.getItem("LoginUser");
  const user = JSON.parse(json);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  const Logout = () => {
    localStorage.removeItem("LoginUser");
    routeChange();
  };

  return (
    <>
      <section className="navbar-bg fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={Logo}
                style={{ width: "6rem", height: "6rem" }}
                alt="logo"
              />
            </Link>
            <div>
              <div className="float-start mx-4">
                <Link to="/cart" className="nav-link">
                  <FiShoppingCart style={{ fontSize: "2.5rem" }} />
                  <span className="badge position-absolute translate-middle bg-dark border border-light rounded-circle">
                    {user ? totalUniqueItems : 0}
                  </span>
                </Link>
              </div>
              <button
                className="navbar-toggler float-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaRegUser className="display-6" />
                  </a>
                  <ul
                    className="dropdown-menu m-4"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    {user ? (
                      <>
                        <li className="nav-item">
                          <a className="nav-link fs-3 username">
                            Hi,{user.name}
                            <br />
                            <span className="fs-5">{user.email}</span>
                          </a>
                        </li>
                      </>
                    ) : (
                      <div className="">
                        <li className="nav-item fw-bold fs-4">
                          Welcome
                          <br />
                          <span className="fw-normal text-nowrap">
                            SignUp/Login to access account
                          </span>
                        </li>
                      </div>
                    )}
                    <hr />
                    <li className="">
                      <Link to="/myorders" className="nav-link fw-normal">
                        Orders
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to={`/products/men`} className="nav-link">
                    Men
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/products/women`} className="nav-link">
                    Women
                  </Link>
                </li>
              </ul>
              {user ? (
                <button
                  className="btn btn-dark rounded-pill fs-4 px-4 mx-3"
                  type="submit"
                  onClick={Logout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/register">
                    <button
                      className="btn btn-dark rounded-pill fs-4 px-4 ms-4"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      className="btn btn-outline-dark rounded-pill fs-4 px-4 mx-5"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
