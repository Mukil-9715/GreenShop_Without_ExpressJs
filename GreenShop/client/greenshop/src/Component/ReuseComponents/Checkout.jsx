import React from "react";
// import { Button } from "react-bootstrap";
import pic1 from "../../Asset/pic1.png";
import { Form, Input,Button, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";

const onFinish = (values) => {
  console.log(values);
};

const Checkout = () => {
  return (
    <div className="">
      <div>Home/Shop/Checkout</div>
      <div className="d-flex my-3 ">
        <div className="w-75 me-5 ">
          <Form layout="vertical" name="nest-messages" onFinish={onFinish}>
            <div className="d-flex">
              <div className="w-50 me-5">
                <Form.Item
                  name={["mukil", "name", "firstname"]}
                  label="First Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["mukil", "address", "country_region"]}
                  label="Country/Region"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["mukil", "address", "streetaddress"]}
                  label="Street Address"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="House number and street name " />
                </Form.Item>
                <Form.Item
                  name={["mukil", "address", "state"]}
                  label="State"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["mukil", "email"]}
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name={["mukil", "orderNotes"]} label="Order Notes">
                  <TextArea
                    autoSize={{
                      minRows: 3,
                      maxRows: 5,
                    }}
                  />
                </Form.Item>
              </div>
              <div className="w-50">
                <Form.Item
                  name={["mukil", "name", "lastname"]}
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["mukil", "address", "town_city"]}
                  label="Town/City"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["mukil", "address", "appartment_suite"]}
                  label="Appartment/suite"
                >
                  <Input placeholder="Appartment, suite, unit, etc. (Optional)" />
                </Form.Item>
                <Form.Item
                  name={["mukil", "address", "zip"]}
                  label="Zip"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["mukil", "phonenumber"]}
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <InputNumber maxLength={10} className="w-100" />
                </Form.Item>
              </div>
            </div>
            <Form.Item>
              <Button className="btns-fill" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="w-25 ms-3 d-flex flex-column align-items-end ">
          <div>
            <div className="fw-bold ">YOUR ORDER</div>
            <div className="d-flex justify-content-between  fw-semibold">
              {" "}
              <div>Products</div>
              <div>Subtotal</div>
            </div>
            <hr className="mt-2 mb-4 primaryclr" />
            <div
              style={{ height: "50px" }}
              className="cardbgclr my-2 row rounded  "
            >
              {/* <div className="row"> */}
              <div className="col-2 d-flex align-items-center">
                <img className="" src={pic1} alt="" width="100%" />
              </div>
              <div className="col-6 d-flex  flex-column align-items-start  justify-content-center ">
                <div className="fs-p fw-semibold ">Product Name</div>
                <div style={{ scale: "0.75" }}>SKU : </div>
              </div>
              <div className="col-2 d-flex align-items-center">(x 2)</div>
              <div className="col-2 d-flex align-items-center primaryclr fw-bold">
                $25
              </div>
              {/* </div> */}
            </div>
            <div style={{ scale: "0.9" }} className="fs-6 text-end ">
              Having a Coupon Code
              <Button className="btns-wtoutline pb-3 fw-semibold pe-0">
                Click Here
              </Button>
            </div>
          </div>
          <div className="w-75">
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
            <div className="my-3">
              <div className="fw-bold">PAYMENT METHODS</div>
              <div className="my-3">
                <div className="border ">Online Banking</div>
                <div className="border my-2">Direct Bank Transfer</div>
                <div className="border ">Cash On Delivery</div>
              </div>
              <Button className="btns-fill">PLACE ORDER</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
