import React, { useEffect, useState } from "react";
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
import SignUp from "./Signup";

function Login(props) {
  const [key, setKey] = useState("home");

  return (
    <div
      style={{ marginLeft: "200px", marginRight: "200px", marginTop: "100px" }}
    >
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        className="mx-5"
      >
        <Row sm={10}>
          <Nav variant="pills" style={{ marginLeft: "15px" }}>
            <Nav.Item style={{ width: "360px" }}>
              <Nav.Link eventKey="first">Sign in</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "360px" }}>
              <Nav.Link eventKey="second">Sign up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Form className="mt-5">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
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
    </div>
  );
}

export default Login;
