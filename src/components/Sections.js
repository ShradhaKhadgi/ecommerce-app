import React from "react";
import { Link } from "react-router-dom";

const Sections = ({ data, section, heading }) => {
  return (
    <>
      <div className="container my-5 cat">
        <div className="row my-5">
          <h1 className="my-5 px-5">{heading}</h1>
          {data.map((elem, id) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={id}>
                <div className="sec_style m-5">
                  <Link to={`/products/${elem.title}/${section}`}>
                    <img src={elem.img} alt="cat_img" />
                  </Link>
                  <div className="h2 my-3">{elem.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sections;
