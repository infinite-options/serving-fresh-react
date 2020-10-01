import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DisplayProducts from "./pages/displayProduct";
import Cart from "./pages/cart";
import FarmGrid from './FarmGrid';
import Profile from './Profile';
import Landing from "./Landing";
import Signup from "./Signup";
import SocialSignUp from "./SocialSignUp";
import Login from './Login';
import History from "./pages/history";
import Refund from "./pages/Refund";
import PayStripe from "./pages/stripe";

// Nav here will take all the adress from children page to this and give
// it to the switch route

function Nav() {
  return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/socialsignup" component={SocialSignUp} />
        <Route exact path="/products" component={DisplayProducts} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/stripe" component={PayStripe} />
        <Route exact path="/history" component={History} />
        <Route exact path="/refund" component={Refund} />
        <Route exact path="/farms" component={FarmGrid} />
        <Route exact path="/profile" component={Profile} />
        <Route path = "*">
          <Redirect to="/" />
        </Route>
      </Switch>
  );
}

export default Nav;
