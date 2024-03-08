import React from "react";
import { Carousel } from "antd";
import { Button } from "react-bootstrap";
import pic1 from "../../Asset/pic1.png";
import pic2 from "../../Asset/pic4.png";
import pic3 from "../../Asset/pic3.png";
import pic4 from "../../Asset/pic2.png";

const contentStyle = {
  height: "615px",
  color: "#3d3d3d",
  // lineHeight: "",
  textAlign: "center",
  // background: "#fefefe",
  borderRadius: "50px",
};

const CarouselElement = () => {
  return (
    <div>
      <Carousel autoplay className="caro">
        {/* <Carousel className="caro"> */}
        <div>
          <h3 style={contentStyle}>
            <div className="d-flex align-items-center h-100 justify-content-evenly">
              <div className="d-flex align-items-start justify-content-evenly flex-column">
                <div className="fs-3">WELCOME TO GREENSHOP</div>
                <div className="fs-1 fw-bold">
                  LET'S MAKE A BETTER <span className="seclr">PLANT</span>{" "}
                </div>
                <p className="fs-6 textpclr">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. <br /> use our plants to create an unique Urban
                  Jungle. Order your favorite plants
                </p>
                <div>
                  <Button className="btns-fill">SHOP NOW</Button>
                </div>
              </div>
              <div style={{ width: "25%" }}>
                <img src={pic1} alt="" width="100%" />
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className="d-flex  align-items-center h-100 justify-content-evenly">
              <div className="d-flex align-items-start justify-content-start flex-column">
                <div className="fs-3 fw-bold" >Discover Our Featured Collection </div>
                <p className="fs-6 my-3 textpclr">
                  From air-purifying wonders to statement foliage, <br /> find
                  the perfect green companion for your home or office.
                </p>
                <div>
                  <Button className="btns-fill">SHOP NOW</Button>
                </div>
              </div>
              <div style={{ width: "40%" }}>
                <img src={pic2} alt="" width="100%" />
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className="d-flex  align-items-center h-100 justify-content-evenly">
              <div style={{ width: "30%" }}>
                <img src={pic3} alt="" width="100%" />
              </div>
              <div className="d-flex align-items-start justify-content-start flex-column">
                <div className="fs-3 fw-bold">Why Choose Indoor Plants? </div>
                <p className="fs-6 my-3 text-left textpclr">
                  They improve air quality, boost mood, and add a touch of
                  nature to any room. <br /> Explore the benefits of bringing
                  the outdoors in.
                </p>
                <div>
                  <Button className="btns-fill">SHOP NOW</Button>
                </div>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className="d-flex  align-items-center h-100 justify-content-evenly">
              <div className="d-flex align-items-start justify-content-start flex-column">
                <div className="fs-3 fw-bold">Greenery without the Hassle! </div>
                <p className="fs-6 w-50 my-3 textpclr">
                  Explore our selection of easy-care plants perfect for plant
                  enthusiasts of all experience levels.
                </p>
                <div>
                  <Button className="btns-fill">SHOP NOW</Button>
                </div>
              </div>
              <div style={{ width: "25%" }}>
                <img src={pic4} alt="" width="100%" />
              </div>
            </div>
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselElement;
