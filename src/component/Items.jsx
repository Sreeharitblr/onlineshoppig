import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  FormControl,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";

function Items(props) {
  const [count, setCount] = useState(props.count);
  let itemData = {};

  // if (props.count !== count) setCount(props.count);
  
  console.log("item count",props.count , count);

  let setDataCount = (e) => {
    switch (e.target.id) {
      case "incrementBtn":
        setCount(count + 1);
        break;
      case "decrementBtn":
        setCount(count - 1);  
        break;
    }
    let tempdata = JSON.parse(localStorage.getItem("testData"));
    tempdata.forEach((element) => {
      if (element.id === props.id) {
        element.count = count;
      }
    });
    localStorage.setItem("testData", JSON.stringify(tempdata));
  };

  if (props.type !== "cart") {
    return (
      <div style={{ marginTop: "5rem", borderRadius: "15px" }}>
        <Card
          className="shadow-lg p-3 mb-5 bg-white "
          style={{ width: "18rem", display: "flex", borderRadius: "15px" }}
        >
          <Card.Img
            className="shadow mb-5 rounded"
            variant="top"
            src={props.img}
            style={{
              borderRadius: "30px",
            }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>${props.price}</Card.Text>
            <Button
              className="shadow p-3 mb-5 rounded"
              variant="primary"
              onClick={(e) => {
                itemData = {
                  url: props.img,
                  price: props.price,
                  count: 1,
                  id: Math.floor(Math.random() * 50),
                };
                props.setcartItemList(itemData);
                itemData = {};
              }}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: "2rem", marginLeft: "5rem" }}>
        <Card
          className="shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: "50rem", display: "flex" }}
        >
          <Container style={{ marginTop: "0px" }}>
            <Row>
              <Col>
                <Card.Img
                  className="shadow-lg  mb-5 rounded"
                  style={{ margin: "2rem" }}
                  variant="top"
                  src={props.img}
                />
              </Col>
              <Col style={{ margin: "2rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Form>
                    <Row>
                      <Button
                        id="decrementBtn"
                        disabled={count < 1}
                        style={{
                          width: "10%",
                          marginLeft: "32%",
                          marginTop: "5%",
                          marginBottom: "5%",
                        }}
                        onClick={(e) => {
                          setDataCount(e);
                          props.click();
                        }}
                      >
                        -
                      </Button>
                      {console.log("form",count)}
                      <FormControl
                        type="text"
                        placeholder="0"
                        style={{
                          width: "15%",
                          textAlign: "center",
                          marginTop: "5%",
                          marginBottom: "5%",
                        }}
                        
                        value={count}
                      />
                      <Button
                        id="incrementBtn"
                        style={{
                          width: "10%",
                          marginTop: "5%",
                          marginBottom: "5%",
                          alignItems: "center",
                        }}
                        onClick={(e) => {
                          setDataCount(e);
                          props.click();
                        }}
                      >
                        +
                      </Button>
                    </Row>
                  </Form>
                  <Card.Text>${props.price}</Card.Text>
                  <Button
                    className="shadow p-3 mb-5 rounded"
                    variant="primary"
                    onClick={(e) => {
                      props.delCartItem(props.img);
                      props.click();                      
                    }}
                  >
                    remove
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}

export default Items;
