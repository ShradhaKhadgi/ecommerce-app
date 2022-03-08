import React from "react";
import { Link } from "react-router-dom";
import { categories } from "./data";
const Category = () => {
  return (
    <>
      <div className="container my-5 cat">
        <div className="row my-5">
          <h1 className="my-5 px-5">Categories to shop</h1>
          {categories.map((elem) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={elem.id}>
                <div className="m-5 cat_style position-relative">
                  <Link to={`/products/${elem.title}`}>
                    <img src={elem.img} alt="cat_img" />
                    <div className="position-absolute text-center cat-title">
                      {elem.title}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
