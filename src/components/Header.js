import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Header = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://cdn.shopify.com/s/files/1/0969/6156/files/Front_Banner_1_1400x.png?v=1556885861"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <p>
                Find your new favorite collection <br /> Don't compromise on
                style! get Flat 30% off for new arivals
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://7space.sgp1.digitaloceanspaces.com/G297/1464131763.aee5b91a13e894bb9098798ad3f5e23b.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <p>
                Find your new favorite collection <br /> Don't compromise on
                style! get Flat 30% off for new arivals
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.royacdn.com/unsafe/Site-95492e80-6caf-421a-bdd2-10307e4c4869/tiny_hero_img_2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <p>
                Find your new favorite collection <br /> Don't compromise on
                style! get Flat 30% off for new arivals
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="display-5" aria-hidden="true">
            <GrPrevious />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="display-5" aria-hidden="true">
            <GrNext />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Header;
