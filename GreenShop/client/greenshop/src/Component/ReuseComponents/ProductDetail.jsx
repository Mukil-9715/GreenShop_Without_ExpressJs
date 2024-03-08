import React, { useContext, useEffect, useState } from "react";
import pic5 from "../../Asset/pic3.png";
import { Button } from "react-bootstrap";
import { Rate } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Greenshop from "../../Context Api/Context";

const ProductDetail = ({ uniquedata }) => {
  const { cartdata, setcartdata } = useContext(Greenshop);
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  console.log(uniquedata);
  const handleCart = () => {
    
    navigate("/shoppingcart");
    setcartdata( [...cartdata,uniquedata])
    
  };
  console.log(cartdata);
  const handleBuy = () => {
    navigate("/checkout");
  };
  const handleAdd=()=>{
    const Qty=qty+1 
    return setQty(Qty)
  }
  const handleSub=()=>{
    return setQty(qty-1)
  }
  return (
    <div className="ProductDetail my-4">
      <div>Home/Shop</div>
      <div className=" my-4 d-flex justify-content-between align-items-center ">
        <div className="cards-img w-50 h-auto d-flex justify-content-center align-items-center">
          <img src={uniquedata.image} alt="" width="75%" />
        </div>
        <div className=" ms-5 w-50">
          <div className="d-flex justify-content-between align-items-end ">
            <div className="">
              <div className="fs-3 fw-bold">{uniquedata.name}</div>
              <div className="fs-4 fw-bold primaryclr">
                {uniquedata.price[0]}
              </div>
            </div>
            <div className="">
              <Rate allowHalf disabled defaultValue={4.5} /> 5 Customer Review{" "}
            </div>
          </div>
          <hr className="mt-0" />
          <div>
            <div className="fs-5 fw-bold">Short Description :</div>
            <div>{uniquedata.description.st_description}</div>
          </div>
          <div className="my-3">
            <div className="fs-5 fw-bold ">Size :</div>
            <div className="d-flex w-25  justify-content-between align-items-center">
              {uniquedata.size.map((data) => {
                return (
                  <div className="btns-sizeoutline sizebtn d-flex justify-content-center align-items-center ">
                    {data}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-3 d-flex">
            <div className="d-flex">
              <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center" onClick={handleSub}>
                -
              </Button>
              <span className="mx-2">
                <input
                  style={{ width: "1.5rem" }}
                  className="ms-4 no-border"
                  type="text"
                  defaultValue="1"
                  onChange={(e) => {
                    const value = e.target.value;
                    const regex = /^[0-9]*$/;
                    if (regex.test(value)) {
                      setQty(e.target.value);
                    }
                  }}
                  value={qty}
                />
              </span>
              <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center" onClick={handleAdd}>
                +
              </Button>
            </div>
            <div>
              <Button className="btns-fill mx-4" onClick={handleBuy}>
                BUY NOW
              </Button>
              <Button className="btns-outline" onClick={handleCart}>
                ADD TO CART
              </Button>
            </div>
          </div>
          <div>Catagiries and tags</div>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around w-25">
          <div>Product Description</div>
          <div>Review</div>
        </div>
        <hr className="mt-0 primaryclr" />
        <div>{uniquedata.description.lg_description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
