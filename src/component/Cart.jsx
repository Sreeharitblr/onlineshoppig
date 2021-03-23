import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link, withRouter } from "react-router-dom";
import Items from "./Items";
import AlertMiddile from "./AlertMiddile";

function Cart(props) {
  const [modalShow, setModalShow] = useState(false);
  //const [total, setTotal] = useState(0);

  let backToHomePage = (e) => {
    props.history.goBack();
    console.log(props.history.goBack);
  };

  let total = 0;
  let selectedItem = JSON.parse(localStorage.getItem("testData"));
  console.log("cart", selectedItem);
  return (
    <div style={{ marginLeft: "50px", marginRight: "50px" }}>
      <h4
        style={{
          textAlign: "left",
          marginLeft: "80px",
          marginTop: "40px",
          opacity: "70%",
        }}
      >
        <ArrowLeft /> Continue Shopping
      </h4>
      <p className="border-top my-3"></p>
      <h4
        style={{
          textAlign: "left",
          marginLeft: "85px",
          marginTop: "40px",
          opacity: "90%",
        }}
      >
        Shopping Cart
      </h4>
      <h6
        style={{
          textAlign: "left",
          marginLeft: "85px",
          opacity: "90%",
        }}
      >
        You have {selectedItem.length} in your cart
      </h6>

      <div style={{
          margin: "0px",
          top: "auto",
          right: "2%",
          bottom: "15%",
          left: "auto",
          position: "fixed",
        }}>
        <Button
          variant="danger"
          size="lg"
          block
          onClick={(e) => backToHomePage(e)}
          className="shadow-lg p-3 mb-5 rounded"
        >
          Cancel
        </Button>
      </div>

      {selectedItem.map((ele, index) => {
        total += ele.price;
        return (
          <Items
            img={ele.url}
            price={ele.price}
            index={index}
            type="cart"
            delCartItem={(delimg) => delCartItem(delimg)}
          />
        );
      })}
      <div>
        <AlertMiddile show={modalShow} onHide={() => setModalShow(false)} />
        <p className="border-top my-3"></p>
        <h3
          style={{ textAlign: "right", paddingRight: "200px", color: "indigo" }}
        >
          Total : {total}
        </h3>
        <p className="border-top my-3"></p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="warning"
          size="lg"
          block
          onClick={() => setModalShow(true)}
          className="shadow-lg p-3 mb-5 rounded"
        >
          Buy Now
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="danger"
          size="lg"
          block
          onClick={(e) => backToHomePage(e)}
          className="shadow-lg p-3 mb-5 rounded"
        >
          Cancel
        </Button>
      </div>
      <div>
        <p className="border-top my-3"></p>
      </div>
    </div>
  );
}

let delCartItem = (delimg) => {
  let temp = JSON.parse(localStorage.getItem("testData")).filter(
    (ele) => ele.url !== delimg
  );
  localStorage.clear();
  localStorage.setItem("testData", JSON.stringify(temp));
  console.log("dele", JSON.parse(localStorage.getItem("testData")));
};

export default withRouter(Cart);
