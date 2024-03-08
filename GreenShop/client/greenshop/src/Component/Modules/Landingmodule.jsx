import React from "react";
import Nav from "../ReuseComponents/Nav";
import CarouselElement from "../ReuseComponents/CarouselElement";
import Footer from "../ReuseComponents/Footer";
import Cardsection from "../ReuseComponents/Cardsection";
import Blog from "../ReuseComponents/Blog";
import Postscard from "../ReuseComponents/Postscard";
import Totop from "../ReuseComponents/Totop";

const Landingmodule = () => {
  return (
    <>
      <Totop />
      <Nav />
      <CarouselElement />
      <Cardsection />
      <Postscard />
      <Blog />
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Landingmodule;
