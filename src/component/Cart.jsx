import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import Items from "./Items";

function Cart(props) {

  let selectedItem = JSON.parse(localStorage.getItem("testData"));
  console.log("cart", selectedItem);
  return (
    <div style ={{marginLeft : "50px"}}>
      {selectedItem.map((ele, index) => {
        return (
          <Items
            img={ele.url}
            price={ele.price}
            index={index}
            type= "cart"    
            delCartItem = {(delimg)=>delCartItem(delimg)}
          />
        );
      })}
    </div>
  );

}

let delCartItem = (delimg) => { 
    let temp = JSON.parse(localStorage.getItem('testData')).filter(ele => 
      ele.url !== delimg
    );
    localStorage.clear();
    localStorage.setItem('testData',JSON.stringify(temp));
    console.log("dele",JSON.parse(localStorage.getItem('testData')));
  };

export default Cart;
