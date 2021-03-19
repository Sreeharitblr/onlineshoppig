import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";

function Items(props) {
  let itemData = {};
  return (
    <div style={{ marginTop: "5rem" }}>
      <Card style={{ width: "18rem" ,display: "flex"}}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>${props.price}</Card.Text>
          <Button
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
}

export default Items;
