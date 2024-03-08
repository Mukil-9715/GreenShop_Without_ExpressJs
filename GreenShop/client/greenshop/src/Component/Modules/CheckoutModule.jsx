import React from "react";
import Footer from "../ReuseComponents/Footer";
import Nav from "../ReuseComponents/Nav";
import Checkout from "../ReuseComponents/Checkout";
import Totop from "../ReuseComponents/Totop";

const CheckoutModule = () => {
  return (
    <>
      <Totop />
      <Nav />
      <div className="container">
        <Checkout />
        <Footer />
      </div>
    </>
  );
};

export default CheckoutModule;
