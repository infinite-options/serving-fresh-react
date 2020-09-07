import React, { useContext, useState } from "react";
import someContexts from "./makeContext";
import { Link } from "react-router-dom";

function Header(props) {
  const cartContext = useContext(someContexts);
  var itemsAmount = cartContext.cartTotal;
  // var fruitClass = "link sort1";
  const [fruitClick, set1]= useState(true);
  const [vegeClick, set2]= useState(true);
  const [dessertClick, set3]= useState(true);
  const [othersClick, set4]= useState(true);

  function fruitClicking(){
    set1(!fruitClick);
    cartContext.setValFruit(!fruitClick);
  }
  function vegeClicking(){
    set2(!vegeClick);
    cartContext.setValVege(!vegeClick);
  }
  function dessertClicking(){
    set3(!dessertClick);
    cartContext.setValDessert(!dessertClick);
  }
  function othersClicking(){
    set4(!othersClick);
    cartContext.setValOther(!othersClick);
  }


  return(<div>
    {/* <img className="userIconHeader"  src="../footer_icon/person (2).png" alt="user-icon"/> */}
    <div className="backArrow">
      <i className="fas fa-chevron-left fa-lg"> Farms</i>
    </div>
    <h2 className="h2Header">{props.farmName}</h2>
    <Link className="link" to="/cart">
      <div id="ex4">
        <span className="p1 fa-stack fa-2x has-badge" data-count={itemsAmount}>
        <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
        </span>
      </div>
    </Link>

    <div>
      <div className={fruitClick ? "link sort1" : "link sort1 colorClick"} onClick={fruitClicking}>
      <i className="fas fa-apple-alt fa-3x iconBlock" ></i>
      <span>fruits</span>
      </div>

      <div className={vegeClick ? "link sort2" : "link sort2 colorClick"} onClick={vegeClicking}>
      <i className="fas fa-carrot fa-3x iconBlock"></i>
      <span>Vegetables</span>
      </div>

      <div className={dessertClick ? "link sort3" : "link sort3 colorClick"} onClick={dessertClicking}>
      <i className="fas fa-ice-cream fa-3x iconBlock"></i>
      <span>Desserts</span>
      </div>

      <div className={othersClick ? "link sort4" : "link sort4 colorClick"} onClick={othersClicking}>
      <i className="fas fa-bread-slice fa-3x iconBlock"></i>
      <span>Others</span>
      </div>
    </div>
    
   </div> );
}

export default Header;
