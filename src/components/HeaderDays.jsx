import React, { useContext, useState } from "react";
import someContexts from "./makeContext";
import { Link } from "react-router-dom";

function HeaderDays(props) {
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
    <h2 className="h2Header">{props.title}</h2>
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
        <img className= "iconBlock positioningSsort" src={fruitClick? "./footer_icon/Asset 7.png": "./footer_icon/orangeFruit.png" }alt="fruit-img"></img>
        <span>fruits</span>
      </div>

      <div className={vegeClick ? "link4Button sort2" : "link4Button sort2 colorClick"} onClick={vegeClicking}>
        <img className= "iconBlock positioningSsort" src= {vegeClick? "./footer_icon/Asset 4.png": "./footer_icon/orangeVegetable.png" } alt="vegetable-img"></img>
        <span>Vegetables</span>
      </div>

      <div className={dessertClick ? "link4Button sort3" : "link4Button sort3 colorClick"} onClick={dessertClicking}>
        <img className= "iconBlock positioningSsort" src= {dessertClick? "./footer_icon/Asset 6.png": "./footer_icon/orangeDessert.png" }  alt="desert-img"></img>
        <span>Desserts</span>
      </div>

      <div className={othersClick ? "link4Button sort4" : "link4Button sort4 colorClick"} onClick={othersClicking}>
        <img className= "iconBlock positioningSsort" src= {othersClick? "./footer_icon/Asset 5.png": "./footer_icon/orangeOthers.png" } alt="bread-img"></img>
        <span>Others</span>
      </div>
    </div>
   </div> );
}

export default HeaderDays;
