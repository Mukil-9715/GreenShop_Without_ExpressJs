import React, { useState } from "react";
import { Slider, Switch } from "antd";
import { Button } from "react-bootstrap";
import pic4 from "../../Asset/pic4.png";
import Cards from "./Cards";

const marks = {
  0: "15k",
  100: {
    label: <strong>100k</strong>,
  },
};
const Cardsection = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  return (
    <div className="cardsection-left d-flex my-5">
      <div className="filtersection  d-flex justify-content-evenly flex-column align-items-center  py-3">
        <div className="w-75">
          <div className="fw-bold ">CATEGORIES</div>
          <div className="d-flex my-2 align-items-center justify-content-between">
            <div className="w-50">items</div>
            <div className="w-25">nos</div>
          </div>
          <div className="d-flex my-2 align-items-center justify-content-between">
            <div className="w-50">items</div>
            <div className="w-25">nos</div>
          </div>
        </div>
        <div className=" w-75">
          <div className="fw-bold ">PRICE RANGE</div>
          <div className="w-75 my-3">
            <Slider
              marks={marks}
              range
              defaultValue={[20, 50]}
              disabled={disabled}
            />
          </div>
          <div className=" w-75">
            price : <span className="primaryclr">5k-10k</span>
          </div>
          <Button className="btns-fill">Filter</Button>
        </div>
        <div className=" w-75 pb-4">
          <div className="fw-bold ">Size :</div>
          <div className="d-flex my-2 align-items-center justify-content-between">
            <div className="w-50">Small</div>
            <div className="w-25">nos</div>
          </div>
          <div className="d-flex my-2 align-items-center justify-content-between">
            <div className="w-50">Medium</div>
            <div className="w-25">nos</div>
          </div>
          <div className="d-flex my-2 pb-3 align-items-center justify-content-between">
            <div className="w-50">Large</div>
            <div className="w-25">nos</div>
          </div>
          <div className="lineprimaryclr"></div>
          <div className="scaleoff d-flex justify-content-evenly flex-column  align-items-center ">
            <div className="secondaryclr fw-bolder mt-3 fs-2 ">SUPER SCALE</div>
            <div className="fs-4"> UP TO 75% OFF</div>
            <img src={pic4} alt="" width="75%" />
          </div>
        </div>
      </div>
      <div className="w-75 mx-5">
        <Cards />
      </div>
    </div>
  );
};

export default Cardsection;
