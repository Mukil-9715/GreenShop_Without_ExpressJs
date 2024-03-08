import { Form, Input, Modal, message } from "antd";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import G from "../../Asset/G_logo.png";
import F from "../../Asset/f logo.png";
import axios from "axios";
import Greenshop from "../../Context Api/Context";

const onFinishLogInFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onFinishSignUp = (values) => {
  const input = {
    user: values.username,
    email: values.email,
    password: values.password,
  };
  const postdata = () => {
    axios
      .post("http://localhost:8000/user", input)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  if (values.password === values.confirmpassword) {
    console.log("ok");
    postdata();
  } else {
    console.log("incorrect password");
  }
  console.log("Success:", values);
};
const onFinishSignUpFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const { userdata } = useContext(Greenshop);

  console.log(userdata);

  const onFinishLogIn = (values) => {
    userdata.map((data) => {
      if (data.user === values.username) {
        if (data.password === values.password) {
          console.log("Successfully verified");
          localStorage.setItem("userdata",data.user)
        } else {
          console.log("Password incorrect");
        }
      } else if (data.email === values.username) {
        if (data.password === values.password) {
          console.log("Successfully verified");
        } else {
          console.log("Password incorrect");
        }
      } else {
        message.error("username or email is incorrect");
      }
    });

    console.log("Success:", values);
  };

  return (
    <div className="pt-5">
      <div className="text-center pb-4">
        ENTER YOUR USER NAME AND PASSWORD TO LOGIN{" "}
      </div>
      <Form
        className="  d-flex justify-content-center flex-column align-items-center "
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          Width: "100%",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishLogIn}
        onFinishFailed={onFinishLogInFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            className="input"
            style={{ width: "300px" }}
            placeholder="User name"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="input"
            style={{ width: "300px" }}
            placeholder="Password"
          />
        </Form.Item>
        <Button style={{ marginLeft: "150px" }} className="btn-text ">
          FORGET PASSWORD?
        </Button>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button
            className="btns-fill"
            style={{ width: "300px" }}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <div className="d-flex my-2 justify-content-evenly   ">
        <div className="centerline"></div>
        <div>Or login with</div>
        <div className="centerline"></div>
      </div>
    </div>
  );
};
const Signup = () => {
  return (
    <div className="pt-5">
      <div className="text-center pb-4">
        ENTER YOUR USER NAME AND PASSWORD TO REGISTER{" "}
      </div>
      <Form
        className="  d-flex justify-content-center flex-column align-items-center "
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          Width: "100%",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishSignUp}
        onFinishFailed={onFinishSignUpFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            className="input"
            style={{ width: "300px" }}
            placeholder="User Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            className="input"
            style={{ width: "300px" }}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="input"
            style={{ width: "300px" }}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmpassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="input"
            style={{ width: "300px" }}
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button
            className="btns-fill"
            style={{ width: "300px" }}
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
      <div className="d-flex my-2 justify-content-evenly   ">
        <div className="centerline"></div>
        <div>Or registration with</div>
        <div className="centerline"></div>
      </div>
    </div>
  );
};

const AuthenticationModule = () => {
  // const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeLogin, setactivelogin] = useState(true);
  const [activeSignup, setactivesignup] = useState(false);
  const [renderlogin, setrenderlogin] = useState(true);
  const [rendersignup, setRendersignup] = useState(false);

  const { isModalOpen, setIsModalOpen } = useContext(Greenshop);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogInForm = () => {
    setactivelogin(true);
    setactivesignup(false);
    setrenderlogin(true);
    setRendersignup(false);
  };
  const handleSignUpForm = () => {
    setactivelogin(false);
    setactivesignup(true);
    setrenderlogin(false);
    setRendersignup(true);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
          Open Modal
        </Button> */}
      <Modal
        title=""
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        footer=""
      >
        <div className="container d-flex ">
          <Button
            style={activeLogin ? { color: "#54ac7c" } : { color: "#3d3d3d" }}
            onClick={handleLogInForm}
            className="custom-button "
          >
            Login
          </Button>
          <div className="fs-3 primaryclr">|</div>
          <Button
            style={activeSignup ? { color: "#54ac7c" } : { color: "#3d3d3d" }}
            onClick={handleSignUpForm}
            className="custom-button h-100"
          >
            Register
          </Button>
        </div>
        {renderlogin && <Login />}
        {rendersignup && <Signup />}

        <div className="  d-flex justify-content-center flex-column align-items-center ">
          <Button className="btns-outline my-4">
            <span className="pe-2">
              <img src={G} alt="" width="25px" />
            </span>{" "}
            LOGIN WITH GOOGLE
          </Button>
          <Button className="btns-outline mb-4">
            <span className="pe-2">
              <img src={F} alt="" width="15px" />
            </span>
            LOGIN WITH FACEBOOK
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AuthenticationModule;
