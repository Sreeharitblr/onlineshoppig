import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link, withRouter } from "react-router-dom";
import Items from "./Items";
import AlertMiddile from "./AlertMiddile";

function Cart(props) {
  const [modalShow, setModalShow] = useState(false);
  const [click, setclick] = useState(false);
  const [bacToHome, setBacToHome] = useState(false);
  const [mess, setMess] = useState();
  //const [total, setTotal] = useState(0);
  let mssg = "";

  let backToHomePage = (e) => {
    setMess("You will be lose data on your cart, Are u sure ?...");
    setModalShow(true);
    if (bacToHome === true) {
        setModalShow(false)
        props.history.goBack();
        setBacToHome(false)
    }
  };
  let byNow = (msg) => {
    setBacToHome(true)
    let loginArr = JSON.parse(localStorage.getItem("LoginData"));
    if (!loginArr) {
      setMess(msg);
      setModalShow(true);
    } else {
      loginArr.forEach((element) => {
        if (element.login === false) {
          setMess(msg);
          setModalShow(true);
        }
      });
    }
  };

  let backToLogin = () => {
    setModalShow(false);
    props.history.push("/Login");
  };

  let total = 0;
  let priceArr = [];
  let selectedItem = JSON.parse(localStorage.getItem("testData"));
  console.log("cart", selectedItem);
  console.log(priceArr);
  let delCount = 0;

  let delCartItem = (delimg) => {
    var temp = selectedItem.filter((ele) => ele.url !== delimg);
    selectedItem = temp;
    delCount += 1;
    localStorage.clear();
    localStorage.setItem("testData", JSON.stringify(temp));
    console.log("dele", JSON.parse(localStorage.getItem("testData")));
  };

  useEffect(() => {
    setclick(false);
    return () => {
      console.log(delCount);
    };
  }, [click]);

  return (
    <div style={{ marginLeft: "50px", marginRight: "50px" }}>
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
      {selectedItem.map((ele, index) => {
        total += ele.price * ele.count;
        priceArr.push(ele.price);
        return (
          <Items
            img={ele.url}
            price={ele.price}
            index={index}
            type="cart"
            count={ele.count}
            id={ele.id}
            click={() => setclick(true)}
            delCartItem={(delimg) => delCartItem(delimg)}
          />
        );
      })}
      {/* //  floating buttion          */}
      <div
        style={{
          margin: "0px",
          top: "15%",
          right: "3%",
          bottom: "auto",
          left: "auto",
          position: "fixed",
          borderRadius: " 50% 20% / 10% 40%",
        }}
      >
        <Card className="shadow-lg p-3 mb-5 rounded">
          <Card.Body>
            {/* {priceArr.map((price)=>{
              return(<Card.Text
              style={{
                textAlign: "right",
                paddingRight: "3px",
                color: "indigo",
                fontSize: "130%",
              }}
            >
             : $ {price}
            </Card.Text>);})} */}
            <Row>
              <Col>
                <Card.Text
                  style={{
                    textAlign: "right",
                    paddingRight: "80px",
                    color: "indigo",
                    fontSize: "200%",
                  }}
                >
                  Total
                </Card.Text>
              </Col>
              <Col>
                <Card.Text
                  style={{
                    textAlign: "right",
                    paddingRight: "3px",
                    color: "indigo",
                    fontSize: "200%",
                  }}
                >
                  : $ {total}
                </Card.Text>
              </Col>
            </Row>
            <div>
              <p className="border-top my-3"></p>
            </div>
            <Button
              variant="warning"
              size="lg"
              block
              onClick={() =>
                byNow("You have not Loged in , Plase login to Continue...")
              }
              className="shadow p-2 mb-3 rounded"
            >
              Buy Now
            </Button>
            <Button
              variant="danger"
              size="lg"
              block
              onClick={(e) => backToHomePage(e)}
              className="shadow p-2 mb-4 rounded"
            >
              Cancel
            </Button>
          </Card.Body>
        </Card>
      </div>
      {(priceArr = [])}
      {/* //  floating buttion          */}

      <div>
        {console.log("555555555", mess)}
        <AlertMiddile
          msg={mess}
          bacToHome={bacToHome}
          setBacToHome={() => setBacToHome(true)}
          show={modalShow}
          Continue={() => setModalShow(false)}
          Cancel={() => backToLogin()}
        />
        <p className="border-top my-3"></p>
        <h3
          style={{ textAlign: "right", paddingRight: "200px", color: "indigo" }}
        >
          Total : {total}
        </h3>
        <p className="border-top my-3"></p>
      </div>
      {/* <div style={{ marginTop: "20px" }}>
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
      </div> */}
      <div>
        <p className="border-top my-3"></p>
      </div>
    </div>
  );
}

export default withRouter(Cart);
