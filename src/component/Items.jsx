import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";

function Items(props) {
  let itemData = {};

  if (props.type !== "cart") {
    return (
      <div style={{ marginTop: "5rem", borderRadius: "15px" }}>
        <Card
          className="shadow-lg p-3 mb-5 bg-white rounded"
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
                itemData = { url: props.img, price: props.price };
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
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>${props.price}</Card.Text>
                  <Button
                    className="shadow p-3 mb-5 rounded"
                    variant="primary"
                    onClick={(e) => {
                      props.delCartItem(props.img);
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
