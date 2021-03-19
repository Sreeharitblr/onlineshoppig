import { useEffect, useState } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import NavbarDiv from "./NavbarDiv.jsx";
import Listitems from "./Listitems";
import Listitems from "./Cart";

function HomepageHandler() {
  const [cartItemList, setcartItemList] = useState([]);
  console.log(cartItemList);
  const [InputText, setInputText] = useState(0);
  return (
    <div>
      <h1>
        <NavbarDiv cartItemList={cartItemList} />
      </h1>
      <div style={{ marginLeft: "25px" }}>
        <Listitems
          setcartItemList={(itemData) =>
            setcartItemList([...cartItemList, itemData])
          }
        />
      </div>
    </div>
  );
}

export default HomepageHandler;
