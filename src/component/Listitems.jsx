import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import Items from "./Items";

const imgArray = [
  {
    url:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 199,
  },
  {
    url:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 599,
  },
  {
    url:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=989&q=80",
    price: 899,
  },
  {
    url:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: 799,
  },
  {
    url:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    price: 299,
  },
  {
    url:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 499,
  },
  {
    url:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 399,
  },
  {
    url:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 499,
  },
  {
    url:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 199,
  },
  {
    url:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: 699,
  },
  {
    url:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    price: 899,
  },
];

function ListItem(props) {
  console.log(props.setcartItemList);
  return chunkArray(imgArray, 4).map((chunk, ids) => (
    <div className="row" key={"div1_" + ids}>
      {chunk.map((ele, index) => (
        <div className="col-md-6 col-sm-6 col-lg-3 format">
          <Items
            img={ele.url}
            price={ele.price}
            index={index}
            setcartItemList={(itemData) => props.setcartItemList(itemData)}
          />
        </div>
      ))}
    </div>
  ));
}

let chunkArray = (arr, size) => {
  let groupedArray = [];
  for (let i = 0; i < arr.length; i += size) {
    groupedArray.push(arr.slice(i, i + size));
  }
  return groupedArray;
};

export default ListItem;
