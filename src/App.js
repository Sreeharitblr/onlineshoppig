import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Login from "./component/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/Cart/:cartItemList" component={Cart} /> */}
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
