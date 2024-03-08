import { Pagination } from "antd";
import React, { useContext } from "react";
import Greenshop from "../../Context Api/Context";
import { useNavigate, useParams } from "react-router-dom";
import getPlacements from "antd/es/_util/placements";

const Cards = () => {
  const navigate = useNavigate();
  const { data, setproductdata } = useContext(Greenshop);
  console.log(data);

  function singlecard(datas) {
    // setproductdata(datas);
    navigate("/product/" + datas._id);
  }

  return (
    <div className="cardsection w-5">
      <div className="d-flex w-100 justify-content-between ">
        <div className="d-flex w-25 justify-content-between ">
          <div>All plants</div>
          <div>New Arrival</div>
          <div>Sale</div>
        </div>
        <div>Sort By : dropdown menu</div>
      </div>
      <div className="d-flex flex-wrap g-5 ">
        {data.map((datas) => {
          return (
            <div
              onClick={() => {
                singlecard(datas);
              }}
              className=" mx-4 my-4"
            >
              <div className="cards-img d-flex justify-content-center align-items-center ">
                <img src={datas.image} alt="" width="200px" />
              </div>
              <div>{datas.name}</div>
              <div className="d-flex justify-content-between w-50 ">
                <p className="primaryclr fw-bold">{datas.price[0]}</p>
                <del>$250</del>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-end">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default Cards;
