import React from "react";
import { Route, Switch } from "react-router-dom";
import DisplayProducts from "./pages/displayProduct";
import Cart from "./pages/cart";
import FarmGrid from './FarmGrid';
import Profile from './Profile';
import Landing from "./Landing";
import Signup from "./Signup";
import Login from './Login';
import History from "./pages/history";

// Nav here will take all the adress from children page to this and give
// it to the switch route

function Nav() {
  return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/products" component={DisplayProducts} />
        <Route path="/cart" component={Cart} />
        <Route path="/history" component={History} />
        <Route exact path="/farms" component={FarmGrid} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
  );
}

export default Nav;
