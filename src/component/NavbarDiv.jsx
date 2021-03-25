import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Cart3,
  PeopleCircle,
  PersonPlusFill,
} from "react-bootstrap-icons";
import addItemToList from "./addItemToList";
//import {Nav ,Navbar,Button,Form,FormControl} from  "bootstrap/dist/css/bootstrap.min.css";

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarDiv(props) {
  //const[name,setName] = useState();

  let loginArr = JSON.parse(localStorage.getItem("LoginData"));
  let name = "";
  if (!loginArr) {
    name = "Login";
  } else {
    loginArr.forEach((element) => {
      console.log("asdasfas", element.login);
      name = element.login ? "Hello " + element.Firstname : "Login";
    });
  }

  let saveToLocal = (arrname, arr) => {
    localStorage.setItem(arrname, JSON.stringify(arr));
    console.log("-----------");
  };

  let logOut = () => {
    loginArr.forEach((element) => {
      element.login = false;
    });
    saveToLocal("LoginData", loginArr);
  };

  let gotoCart = (e) => {
    saveToLocal("testData", props.cartItemList);
    //props.history.push(`/Cart/:${JSON.stringify(props.cartItemList)}`);
    props.history.push("/Cart");
  };

  let logIn = () => {
    //<Login setItem={(name)=>setName([...name , name])}/>
    props.history.push("/Login");
  };

  return (
    <div>
      <Router>
        <Navbar className="shadow " bg="primary" variant="dark">
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
              <NavDropdown.Item href="#action/3.3">ADD</NavDropdown.Item>
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
                <Cart3 style={{ marginBottom: "4px" }} />
                {""} Cart {""}
                <span class="badge badge-light">
                  {props.cartItemList.length}
                </span>
                <span class="sr-only">unread messages</span>
              </Button>
            </Form>
            {/* <NavDropdown
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
            </NavDropdown> */}
            <Form inline className="mx-2">
              <Dropdown as={ButtonGroup}>
                <Button
                  disabled={name !== "Login"}
                  variant="primary"
                  onClick={(e) => {
                    logIn(e);
                  }}
                >
                  <PersonPlusFill style={{ marginBottom: "4px" }} /> {""} {name}
                </Button>

                <Dropdown.Toggle
                  disabled={name === "Login"}
                  split
                  variant="primary"
                  id="dropdown-split-basic"
                  drop="left"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3" onClick={() => logOut()}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Nav>
        </Navbar>
      </Router>
    </div>
  );
}

export default withRouter(NavbarDiv);
