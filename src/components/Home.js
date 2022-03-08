import React from "react";
import Category from "./Category";
import { men_section } from "./data";
import { women_section } from "./data";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sections from "./Sections";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Sections data={men_section} section="men" heading="Men's Collection" />
      <Sections
        data={women_section}
        section="women"
        heading="Women's Collection"
      />
      <Footer />
    </>
  );
};

export default Home;
