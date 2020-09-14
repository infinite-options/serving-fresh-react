import React from "react";
import { Route, Switch } from "react-router-dom";
import DisplayProducts from "./pages/displayProduct";
import Cart from "./pages/cart";
import FarmGrid from './FarmGrid';
import Profile from './Profile';
import Login from "./Login";
import Signup from "./Signup";

// Nav here will take all the adress from children page to this and give
// it to the switch route

function Nav() {
  return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/products" component={DisplayProducts} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/farms" component={FarmGrid} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
  );
}

export default Nav;
