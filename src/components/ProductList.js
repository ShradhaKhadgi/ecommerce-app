import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "./data";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const filterProd = products.filter((elem) => {
    return elem.category === cat;
  });
  const secProd = products.filter((elem) => {
    return elem.section === cat;
  });
  const [data, setData] = useState(filterProd);
  const sec = location.pathname.split("/")[3];
  const prod = filterProd.filter((elem) => {
    return elem.section === sec;
  });
  useEffect(() => {
    const option = document.getElementById("filterC");
    if (sec === "men" || sec === "women") {
      option.style.display = "none";
      setData(prod);
    } else if (cat === "men" || cat === "women") {
      setData(secProd);
    } else {
      option.style.display = "none";
      setData(filterProd);
    }
  }, [cat]);
  const filterCat = () => {
    const c = document.getElementById("filterC").value;
    const msg = document.getElementById("notfound");
    const ct = secProd.filter((elem) => {
      return elem.category === c;
    });
    if (c === "All") {
      msg.innerHTML = "";
      setData(secProd);
    } else {
      setData(ct);
    }
  };
  const filterPrice = () => {
    const p = document.getElementById("price").value;
    const msg = document.getElementById("notfound");
    if (sec === "men" || sec === "women") {
      const a = prod.filter((elem) => {
        return elem.price <= p;
      });
      if (p === "All") {
        msg.innerHTML = "";
        setData(prod);
      } else {
        a.length === 0
          ? (msg.innerHTML = "No Products Found")
          : (msg.innerHTML = "");
        setData(a);
      }
    } else if (cat === "men" || cat === "women") {
      const b = secProd.filter((elem) => {
        return elem.price <= p;
      });
      if (p === "All") {
        msg.innerHTML = "";
        setData(secProd);
      } else {
        b.length === 0
          ? (msg.innerHTML = "No Products Found")
          : (msg.innerHTML = "");
        setData(b);
      }
    } else {
      const c = filterProd.filter((elem) => {
        return elem.price <= p;
      });
      if (p === "All") {
        msg.innerHTML = "";
        setData(filterProd);
      } else {
        c.length === 0
          ? (msg.innerHTML = "No Products Found")
          : (msg.innerHTML = "");
        setData(c);
      }
    }
  };
  const a = [...new Set(secProd.map((elem) => elem.category))];
  return (
    <>
      <Navbar />
      <div className="container prod mb-5">
        <h1 className="display-6 mb-5 text-capitalize">{cat}</h1>
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-10 col-12">
            <div className="d-flex justify-content-evenly">
              <label className="h3">Filter:</label>
              <select
                className="form-select form-select-lg w-auto"
                id="filterC"
                onChange={filterCat}
              >
                <option value="All">category</option>
                {a.map((elem, id) => {
                  return (
                    <option value={elem} key={id}>
                      {elem}
                    </option>
                  );
                })}
              </select>
              <select
                className="form-select form-select-lg w-auto"
                id="price"
                onChange={filterPrice}
              >
                <option value="All">Price</option>
                <option value={500}>Rs.0 to Rs.500</option>
                <option value={1000}>Rs.500 to Rs.1000</option>
                <option value={2000}>Rs.1000 to Rs.2000</option>
                <option value={3000}>Rs.2000 to Rs.3000</option>
                <option value={4000}>Rs.3000 to Rs.4000</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <span className="h2" id="notfound"></span>
        <div className="row">
          {data.map((elem) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-6 prod_card"
                key={elem.id}
              >
                <Link to={`/product/${elem.category}/${elem.title}/${elem.id}`}>
                  <div className="prod_style">
                    <img src={elem.img} className="w-100 h-100" alt="cat_img" />
                    <div>
                      <p className="prod_title">{elem.title}</p>
                      <p className="">
                        <b>Rs. {elem.price}</b>{" "}
                        <s className="mx-2">Rs. {elem.real_price}</s>
                        <span className="text-danger">({elem.discount})</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
