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
  InputGroup,
} from "react-bootstrap";

function SignUp() {
  const [validated, setValidated] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  let user = {};
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(user);
    setUserDetails((userDetails) => [...userDetails, user]);
    console.log(userDetails);
    user = {};
    localStorage.setItem("LoginData", JSON.stringify(userDetails));
  };

  const handleInsertion = (e) => {
    //console.log(e.target.placeholder);
    const { placeholder, value } = e.target;
    switch (placeholder) {
      case "First name":
        user[placeholder] = value;
        break;
      case "Last name":
        user[placeholder] = value;
        break;
      case "Username":
        user[placeholder] = value;
        break;
      case "City":
        user[placeholder] = value;
        break;
      case "Zip":
        user[placeholder] = value;
        break;
    }
    user["id"] = Math.floor(Math.random() * 100);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              onChange={(e) => {
                handleInsertion(e);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              onChange={(e) => {
                handleInsertion(e);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  handleInsertion(e);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              onChange={(e) => {
                handleInsertion(e);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              required
              onChange={(e) => {
                handleInsertion(e);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              required
              onChange={(e) => {
                handleInsertion(e);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default SignUp;
