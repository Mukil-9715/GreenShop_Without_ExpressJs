import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import logo from "../../Asset/logo.png";
import Greenshop from "../../Context Api/Context";
import { useNavigate } from "react-router-dom";
import AuthenticationModule from "../Modules/AuthenticationModule";

const Nav = () => {
  const navigate = useNavigate();
  const { isModalOpen, setIsModalOpen } = useContext(Greenshop);
  const handlelogin = () => {
    setIsModalOpen(true);
  };
  const handleCart = () => {
    navigate("/shoppingcart");
  };
  const user = localStorage.getItem("userdata");
  console.log(user);

  return (
    <div>
      <AuthenticationModule />
      <div className="d-flex align-items-center justify-content-evenly">
        <div className="d-flex ">
          <img src={logo} alt="" width="60px" />
          <div className="primaryclr mt-2 ms-3 fs-3 fw-bold">Greenshop</div>
        </div>
        <div className="d-flex align-items-center justify-content-around menus">
          <Button className="btn-text">Home</Button>
          {/* <Button className='btn-text'>Shop</Button> */}
          <Button className="btn-text">Plant Care</Button>
          <Button className="btn-text">Blog</Button>
        </div>
        <div className="d-flex align-items-center justify-content-around icons">
          <SearchOutlined />
          <HeartOutlined />
          <UserOutlined />
          <Button className="btn-text" onClick={handleCart}>
            <ShoppingCartOutlined />
          </Button>
        </div>
        {user ? (
          user
        ) : (
          <Button className="btns-fill" onClick={handlelogin}>
            Login
          </Button>
        )}
      </div>
      <hr className="mt-0" />
    </div>
  );
};

export default Nav;
