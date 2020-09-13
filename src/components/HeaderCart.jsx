import React, { useContext } from "react";
import { Link } from "react-router-dom";
import someContexts from "./makeContext";

function HeaderCart() {
  const cartContext = useContext(someContexts);
  var itemsAmount = cartContext.cartTotal;
  return (<div>
    {/* <img className="userIconHeader"  src="../footer_icon/person (2).png" alt="user-icon"/> */}
    <h2 className="h2HeaderCart">Orders</h2>
    <Link className="link" to="/cart">
      <div id="ex4">
       <span className="p1 fa-stack fa-2x has-badge" data-count={itemsAmount}>
       <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
       </span>
      </div>
    </Link>
    <div className="backArrowCart">
      <Link className="link" to="/"><i className="fas fa-chevron-left fa-lg"> Back</i></Link>
    </div>   
   </div> );
}

export default HeaderCart;