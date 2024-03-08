import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import pic1 from "../../Asset/pic1.png";
import { useNavigate } from "react-router-dom";
import Greenshop from "../../Context Api/Context";

const ProductCart = () => {
  const { cartdata, qty, setQty} = useContext(Greenshop);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  const handleShopping = () => {
    navigate("/");
  };
  console.log(cartdata);

//   {
//     "_id": "656ca41dbc242186618b8e5d",
//     "name": "Alocasia Silver Dragon",
//     "description": {
//         "st_description": "Alocasia silver dragon plant is an excellent houseplant which can tolerate a wide range of growing conditions. This plant is categorized under indoor, ornamental and flowering plants.",
//         "lg_description": " Alocasia si  lver dragon plant is an excellent houseplant which can tolerate a wide range of growing conditions. This plant is categorized under indoor, ornamental and flowering plants. This is a cute houseplant with heart-shaped leaf foliage. Alocasia is peculiar for foliage and is the best indoor plant. The leaves of this plant are thick, and silver with green venation. The plant grows up to the height of 2 tall & wide.",
//         "benefits": "Alocasia silver dragon plants are ornamental & attractive plants to decorate your indoors. This leaf foliage attracts the center of focus in your indoor environment. It is one of the low-maintenance indoor plants. Alocasia silver dragon is a very rare and trending plant",
//         "_id": "65ddd29a070421ee4f1fb269"
//     },
//     "image": "https://elysianflora.com/wp-content/uploads/2022/02/alocasiasilverdragon_45.png",
//     "price": [
//         "$90",
//         "$110",
//         "$140",
//         "$190"
//     ],
//     "categories": "indoor plants",
//     "size": [
//         "S",
//         "M",
//         "L",
//         "XL"
//     ],
//     "stock": [
//         73,
//         42,
//         34,
//         11
//     ],
//     "tags": [
//         "Alocasia silver dragon",
//         "Alocasia baginda"
//     ]
// }
  return (
    <div className=" container">
      <div>Home/Shop/Shopping Cart</div>
      <div className="d-flex">
        <div className="w-75 me-5 ">
          <div className="row">
            <div className="col-5 fw-bold">PRODUCT</div>
            <div className="col-2 fw-bold">PRICE</div>
            <div className="col-2 fw-bold">QUANTITY</div>
            <div className="col-2 fw-bold">TOTAL</div>
          </div>
          <hr className="mt-2 primaryclr" />
          {cartdata.map((data)=>{
            const  totalAmount= data.price[0].replace("$","")*qty
            return(<div
            style={{ height: "100px" }}
            className="cardbgclr my-3 row rounded  "
          >
            <div className="col-1 d-flex align-items-center">
              <img className="" src={data.image} alt="" width="100%" />
            </div>
            <div className="col-4 d-flex  flex-column  justify-content-center ">
              <div>{data.name}</div>
              <div>SKU:</div>
            </div>
            <div className="col-2 d-flex align-items-center">{data.price[0]}</div>
            <div className="col-2 d-flex align-items-center">
              <div className="d-flex">
                <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                  -
                </Button>
                <span className="mx-2">1</span>
                <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                  +
                </Button>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center ">${totalAmount}</div>
            <div className="col-1 d-flex align-items-center">bin</div>
          </div>)})}
        </div>
        <div className="w-25 ms-3">
          <div className="fw-bold ">CART TOTALS</div>
          <hr className="my-2 primaryclr" />
          <div>
            <div>Coupon Apply</div>
            <div></div>
          </div>
          <div className="my-3">
            <div className="d-flex justify-content-between">
              <div>Sub Total</div>
              <div className="fw-bold ">$1600</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Coupon Discount</div>
              <div>(-) $0</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Shipping</div>
              <div className="fw-bold ">$16</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="fw-bold ">Total</div>
            <div className="primaryclr fw-bold ">$1616</div>
          </div>
          <div className="text-center">
            <Button className="btns-fill my-3" onClick={handleCheckout}>
              PROCESS TO CHECKOUT
            </Button>
            <Button className="btns-sizeoutline mb-3" onClick={handleShopping}>
              CONTINOUE SHOPPING
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
