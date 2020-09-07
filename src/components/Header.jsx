import React, { useContext } from "react";
import someContexts from "./makeContext";
import { Link } from "react-router-dom";

function Header(props) {
  const cartContext = useContext(someContexts);
  var itemsAmount = cartContext.cartTotal;
  return(<div>
    {/* <img className="userIconHeader"  src="../footer_icon/person (2).png" alt="user-icon"/> */}
    <div className="backArrow">
      <i className="fas fa-chevron-left">Farms</i>
    </div>
    <h2 className="h2Header">{props.farmName}</h2>
    <Link className="link" to="/cart">
      <div id="ex4">
        <span className="p1 fa-stack fa-2x has-badge" data-count={itemsAmount}>
        <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
        </span>
      </div>
    </Link>
   </div> );
}

export default Header;
