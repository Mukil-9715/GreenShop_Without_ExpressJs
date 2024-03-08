import React from "react";
import { Button } from "react-bootstrap";
import pic2 from "../../Asset/pic2.png";
import pic4 from "../../Asset/pic4.png";

const Postscard = () => {
  return (
    <div className="pstcardmain d-flex justify-content-around my-5">
      <div className="pstcard d-flex justify-content-around align-items-center  ">
        <img className="mx-5" src={pic2} alt="" width="150px" />

        <div className="text-end me-4">
          <div className="fs-4 mt-3 fw-bold">SUMMER CACTUS & SUCCULENTS</div>
          <div className="mb-3">
            Find your unique, easy-to-care for plants that radiate the spirit of
            summer
          </div>
          <Button className="btns-fill mb-3">FIND MORE &gt;</Button>
        </div>
      </div>
      <div className="pstcard d-flex justify-content-around align-items-center  ">
        <img className="mx-5" src={pic4} alt="" width="150px" />

        <div className="text-end me-4">
          <div className="fs-4 mt-3 fw-bold">STYLING TRENDS & <br />  MUCH MORE</div>
          <div className="mb-3">
            Our online plant shop offens s wide range of cheap and trendy plants</div>
          <Button className="btns-fill mb-3">FIND MORE &gt;</Button>
        </div>
      </div>
    </div>
  );
};

export default Postscard;
