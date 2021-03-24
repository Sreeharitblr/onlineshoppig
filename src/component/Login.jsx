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
    className="shadow-lg "
      style={{ borderRadius:"5% 10%", marginLeft: "200px", marginRight: "200px", marginTop: "100px", paddingTop:"60px" }}
    >
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        className="mx-5"
      >
        <Row sm={10} style={{paddingLeft:"120px"}}>
          <Nav variant="pills" style={{ marginLeft: "15px" }}>
            <Nav.Item className="shadow my-3" style={{ width: "360px" }}>
              <Nav.Link eventKey="first">Sign in</Nav.Link>
            </Nav.Item>
            <Nav.Item className="shadow my-3" style={{ width: "360px" }}>
              <Nav.Link eventKey="second">Sign up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row style={{paddingLeft:"180px" }}>
          <Col sm={9} className="shadow-lg my-3" style={{ borderRadius:"5%"}}>
            <Tab.Content >
              <Tab.Pane eventKey="first">
                <Form className="m-5">
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
                    <Form.Check type="checkbox" label="Allways log me in" />
                  </Form.Group>
                  <Button className="shadow-lg " variant="primary" type="submit">
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
      <div>
        <p className="border-top my-3 pt-5"></p>
      </div>
    </div>
  );
}

export default Login;
