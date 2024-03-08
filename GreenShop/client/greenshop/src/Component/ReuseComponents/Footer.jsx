import React from "react";
import "../../App.css";
import { Button } from "react-bootstrap";

import ftpic1 from "../../Asset/ftpic1.png";
import ftpic2 from "../../Asset/ftpic2.png";
import logo from "../../Asset/logo.png";
import ftpic3 from "../../Asset/ftpic3.png";
import location from "../../Asset/location.png";
import mail from "../../Asset/mail.png";
import phone from "../../Asset/phone.png";
import facebook from "../../Asset/facebook_cos.png";
import twitter from "../../Asset/twitter_cos.png";
import insta from "../../Asset/instagram_cos.png";
import paypal from "../../Asset/paypal_logo.png";
import mastercard from "../../Asset/mastercard_logo.png";
import visa from "../../Asset/visa_logo.png";
import americanExpress from "../../Asset/american_express_logo.png";

const FooterTop = () => {
  return (
    <div className="d-flex justify-content-around m-4 pt-5 align-content-center ">
      <div className=" d-flex w-25 align-items-start rt-line flex-column ms-3  justify-content-center">
        <img src={ftpic1} alt="" width="110px" />
        <div className="fs-4 fw-bold ">Garden Care</div>
        <div className="text-wrap w-75 textpclr">
          It encompass a wide range of activities, including planting, watering,
          fertilizing and pest control
        </div>
      </div>
      <div className=" d-flex w-25 align-items-start rt-line flex-column ms-3  justify-content-center ">
        <img src={ftpic2} alt="" width="100px" />
        <div className="fs-4 fw-bold ">Plant Renovation</div>
        <div className="text-wrap w-75 textpclr">
          The goal of plant renovation is to breath new life into your greenery
        </div>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column ms-3  justify-content-center ">
        <img src={ftpic3} alt="" width="120px" />
        <div className="fs-4 fw-bold">Watering Garden</div>
        <div className="text-wrap w-75 textpclr">
          Adequate watering not only supports the health and growth of plants
        </div>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column ms-3  justify-content-center ">
        <div className="fs-5 fw-bold ">Would you like to join Newsletters?</div>
        <div className="my-3">
          <input
            className="p-2 footipt"
            type="text"
            placeholder="Enter your Email address"
          />
          <Button className="btns-fill bt py-2">JOIN</Button>
        </div>
        <div className="text-wrap w-75 textpclr">
          We usually post offers and challenges in newsletters. <br />
          We're your online houseplant and accessories shipped directly from our
          green house to yours!
        </div>
      </div>
    </div>
  );
};
const FooterMiddle = () => {
  return (
    <div className="d-flex bt-b-line ft-mid my-2 py-3 justify-content-around  align-content-center ">
      <div className="d-flex w-25 ps-5 h-100 ">
        <img src={logo} alt="" width="50px" height="50px" />
        <div className="primaryclr mt-2 ms-3 fs-3 fw-bold">Greenshop</div>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column   justify-content-center ">
        <div className="d-flex  h-100 ">
          <img
            style={{ marginTop: "20px" }}
            src={location}
            alt=""
            width="24px"
            height="24px"
          />
          <div className=" mt-2 ms-3 fs-6 textpclr ">
            70 West Buckingham Ave. breadcrumb <br />
            Farmingdale,NY 11735
          </div>
        </div>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column   justify-content-center ">
        <div className="d-flex  h-100 ">
          <img
            style={{ marginTop: "10px" }}
            src={mail}
            alt=""
            width="24px"
            height="24px"
          />
          <div className=" mt-2 ms-3 fs-6 textpclr">greenshop@gmail.com</div>
        </div>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column   justify-content-center ">
        <div className="d-flex  h-100 ">
          <img
            style={{ marginTop: "10px" }}
            src={phone}
            alt=""
            width="24px"
            height="24px"
          />
          <div className=" mt-2 ms-3 fs-6 textpclr">+88 01913 717 493</div>
        </div>
      </div>
    </div>
  );
};
const FooterBottom = () => {
  return (
    <div className="d-flex py-3 justify-content-around  align-content-center ">
      <div className="d-flex w-25 ps-5 h-100 ">
        <ul className="un-list">
          <li className="fs-4 fw-bold">MY ACCOUNT</li>
          <li className="textpclr">My Account</li>
          <li className="textpclr">Our Account</li>
          <li className="textpclr">Contact us</li>
          <li className="textpclr">Career</li>
          <li className="textpclr">Specials</li>
        </ul>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column   justify-content-center ">
        <div className="d-flex  h-100 ">
          <ul className="un-list">
            <li className="fs-4 fw-bold">HELP & GUIDE</li>
            <li className="textpclr">Help Center</li>
            <li className="textpclr">How to Buy</li>
            <li className="textpclr">Shipping & Delivery</li>
            <li className="textpclr">Product Policy</li>
            <li className="textpclr">How to Return</li>
          </ul>
        </div>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column   justify-content-center ">
        <div className="d-flex  h-100 ">
          <ul className="un-list">
            <li className="fs-4 fw-bold">CATEGORIES</li>
            <li className="textpclr">House Plants</li>
            <li className="textpclr">Potter Plants</li>
            <li className="textpclr">Seeds</li>
            <li className="textpclr">Small Plants</li>
            <li className="textpclr">Accessories</li>
          </ul>
        </div>
      </div>
      <div className=" d-flex w-25 align-items-start  flex-column   justify-content-center ">
        <div className=" h-100 ">
          <div className=" fs-4 fw-bold ">SOCIAL MEDIA</div>
          <div className="d-flex justify-content-between w-75 my-2 ">
            <img src={facebook} alt="" width="30px" />
            <img src={insta} alt="" width="30px" />
            <img src={twitter} alt="" width="30px" />
          </div>
          <div className=" fs-4 fw-bold ">WE ACCEPT</div>
          <div className="my-2">
            <img src={paypal} alt="" width="50px" />
            <img src={mastercard} alt="" width="50px" />
            <img src={visa} alt="" width="50px" />
            <img src={americanExpress} alt="" width="50px" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="">
      <div className="footer ">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
      <div className="text-center my-2 grayclr">
        &copy; 2023 GREENSHOP, ALL RIGHTS RESERVED.{" "}
      </div>
    </div>
  );
};

export default Footer;
