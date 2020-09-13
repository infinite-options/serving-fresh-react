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
    <hr className="blackHrHeaderSHop"></hr>
    <div>
      <div className={fruitClick ? "link4Button sort1" : "link4Button sort1 colorClick"} onClick={fruitClicking}>
        <img className= "iconBlock" src= "./footer_icon/Asset 7.png" alt="fruit-img"></img>
        {/* <i className="fas fa-apple-alt fa-3x iconBlock" ></i> */}
        <span>fruits</span>
      </div>

      <div className={vegeClick ? "link4Button sort2" : "link4Button sort2 colorClick"} onClick={vegeClicking}>
        <img className= "iconBlock positioningSsort2" src= "./footer_icon/Asset 4.png" alt="vegetable-img"></img>
        {/* <i className="fas fa-carrot fa-3x iconBlock"></i> */}
        <span>Vegetables</span>
      </div>

      <div className={dessertClick ? "link4Button sort3" : "link4Button sort3 colorClick"} onClick={dessertClicking}>
        <img className= "iconBlock positioningSsort3" src= "./footer_icon/Asset 6.png" alt="desert-img"></img>
        {/* <i className="fas fa-ice-cream fa-3x iconBlock"></i> */}
        <span>Desserts</span>
      </div>

      <div className={othersClick ? "link4Button sort4" : "link4Button sort4 colorClick"} onClick={othersClicking}>
        <img className= "iconBlock" src= "./footer_icon/Asset 5.png" alt="bread-img"></img>
        {/* <i className="fas fa-bread-slice fa-3x iconBlock"></i> */}
        <span>Others</span>
      </div>
    </div>
   </div> );
}

export default Header;
