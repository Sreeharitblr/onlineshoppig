import React, { useEffect, useState } from "react";
//import {Nav ,Navbar,Button,Form,FormControl} from  "bootstrap/dist/css/bootstrap.min.css";

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter
} from "react-router-dom" ;
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarDiv(props) {
  let gotoCart = (e) => {
    localStorage.setItem('testData',JSON.stringify(props.cartItemList))
    //props.history.push(`/Cart/:${JSON.stringify(props.cartItemList)}`);
    props.history.push('/Cart');
  };
  return (
    <div>
      <Router>
        <Navbar bg="primary" variant="dark">
          {/* <Navbar.Brand style={{ fontSize: "20px" }} href="#home">
            Navbar
          </Navbar.Brand> */}
          <Nav className="mr-5">
            <Link
              style={{ fontSize: "20px", color: "white", marginTop: "8px" }}
              to="/"
            >
              Home
            </Link>
            <Nav.Link
              style={{ fontSize: "20px", color: "white" }}
              href="#features"
            >
              Features
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "20px", color: "white" }}
              href="#pricing"
            >
              Pricing
            </Nav.Link>

            <NavDropdown
              style={{ fontSize: "20px", color: "white" }}
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Form inline>
              <Button
                variant="outline-light"
                onClick={(e) => {
                  gotoCart(e);
                }}
              >
                Cart
              </Button>
            </Form>
            <NavDropdown
              className="mr-ml-2"
              style={{ fontSize: "20px", color: "white" }}
              title="Login"
              id="collasible-nav-dropdown"
              drop="left"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Router>
    </div>
  );
}

export default withRouter (NavbarDiv);
