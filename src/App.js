import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "react-use-cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products/:cat" element={<ProductList />} />
              <Route
                exact
                path="/products/:cat/:section"
                element={<ProductList />}
              />
              <Route
                exact
                path="/product/:cat/:title/:id"
                element={<Product />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/myorders" element={<Orders />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ScrollToTop>
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
