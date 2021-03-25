import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import {
  Button,
  Form,
  Tabs,
  Tab,
  Sonnet,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter,
} from "react-router-dom";
import SignUp from "./Signup";

function Login(props) {
  const [key, setKey] = useState("home");
  let loginArr = JSON.parse(localStorage.getItem("LoginData"));
  let username = "",
    password = "";

  const handelValue = (e) => {
    const { placeholder, value } = e.target;
    switch (placeholder) {
      case "Username":
        username = value;
        break;
      case "Password":
        password = value;
        break;
    }
  };

  let loginFun = (e) => {
    loginArr.forEach((element) => {
      if (username === element.Username && password === element.Password) {
        props.history.replace(`/`);
        //props.setName(element.Firstname);
        element.login = true;
      }
    });
    console.log("logval", loginArr);
    localStorage.setItem("LoginData", JSON.stringify(loginArr));
  };

  let backToHomePage = (e) => {
    props.history.goBack();
    console.log(props.history.goBack);
  };

  return (
    <React.Fragment>
      <h4
        style={{
          textAlign: "left",
          marginLeft: "80px",
          marginTop: "40px",
          opacity: "70%",
        }}
        onClick={(e) => {
          backToHomePage(e);
        }}
      >
        <ArrowLeft /> Continue Shopping
      </h4>
      <div>
        <p className="border-top my-3"></p>
      </div>
      <div
        className="shadow-lg "
        style={{
          backgroundColor: "#79dfc1",
          borderRadius: "5% 10%",
          marginLeft: "200px",
          marginRight: "200px",
          marginTop: "10px",
          paddingTop: "60px",
        }}
      >
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="mx-5"
        >
          <Row sm={10} style={{ paddingLeft: "120px" }}>
            <Nav variant="pills" style={{ marginLeft: "15px" }}>
              <Nav.Item className="shadow my-3" style={{ width: "360px" }}>
                <Nav.Link eventKey="first">Sign in</Nav.Link>
              </Nav.Item>
              <Nav.Item className="shadow my-3" style={{ width: "360px" }}>
                <Nav.Link eventKey="second">Sign up</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row style={{ paddingLeft: "180px" }}>
            <Col
              sm={9}
              className="shadow-lg my-3"
              style={{ borderRadius: "5%", backgroundColor: "white" }}
            >
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Form className="m-5">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Username"
                        onChange={(e) => {
                          handelValue(e);
                        }}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicPassword"
                      onChange={(e) => {
                        handelValue(e);
                      }}
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="Password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Allways log me in" />
                    </Form.Group>
                    <Button
                      className="shadow-lg "
                      variant="primary"
                      onClick={(e) => {
                        loginFun(e);
                      }}
                    >
                      Login
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <SignUp />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <div>
          <p className="border-top my-3 pt-5"></p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Login);
