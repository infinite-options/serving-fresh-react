import React from "react";
import { Link } from "react-router-dom";

function HeaderCart(props) {
  return (
    <header>
      <Link to="/"> {props.farmName}</Link>
    </header>
  );
}

export default HeaderCart;
