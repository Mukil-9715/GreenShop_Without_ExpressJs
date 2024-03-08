import "antd/dist/antd";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Landingmodule from "./Component/Modules/Landingmodule";
import {Routes,Route} from "react-router-dom"
import ProductModule from "./Component/Modules/ProductModule";
import CartsModules from "./Component/Modules/CartsModules";
import CheckoutModule from "./Component/Modules/CheckoutModule";
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Landingmodule />}/>
      <Route path="/product/:plant_id" element={<ProductModule />}/>
      <Route path="/shoppingcart" element={<CartsModules />}/>
      <Route path="/checkout" element={<CheckoutModule />}/>
    </Routes>
    

    </>
  )
}

export default App;
