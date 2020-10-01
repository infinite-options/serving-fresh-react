import React,{useContext} from "react";
import { useHistory } from "react-router-dom";
import someContexts from "./makeContext";


function Footer() {
  // const [homeClick, setHome]= useState(true);
  // const [orderClick, setOrder]= useState(true);
  // const [infoClick, setInfo]= useState(true);
  // const [userClick, setUser]= useState(true);
  var history = useHistory();
  const goToDays = () => history.push("/days");
  const goToOrder = () => history.push("/cart");
  const cartContext = useContext(someContexts);

  // const [days,order,info,profile]= cartContext.currentFooterColor;
  function homeClicking(){
    if(cartContext.currentFootClick !== "days"){
      cartContext.setFootClick("days");
    }
    goToDays();
  }
  function orderClicking(){
    if(cartContext.currentFootClick !== "order"){
      cartContext.setFootClick("order");
    }
    goToOrder();
  }
  function infoClicking(){
    if(cartContext.currentFootClick !== "info"){
      cartContext.setFootClick("info");
    }
  }
  function userClicking(){
    if(cartContext.currentFootClick !== "profile"){
      cartContext.setFootClick("profile");
    }
  }
  return (
    <footer className="stickyFooter">
    <div>
      <div className="linkFooter homeIcon" onClick={homeClicking}>
      <img className= "iconBlock" src= {cartContext.currentFootClick !== "days"?"./footer_icon/Asset 1.png": "./footer_icon/daysFooter.png"} alt="card-img"></img>
        <span>Days</span>
      </div>

      <div className="linkFooter orderIcon" onClick={orderClicking}>
       <img className= "iconBlock" src= {cartContext.currentFootClick !== "order"?"./footer_icon/Asset 9.png": "./footer_icon/refundFooter.png"} alt="dollar-img"></img>
       <span>Orders</span>
      </div>

      <div className="linkFooter infoIcon" onClick={infoClicking}>
        <img className= "iconBlock" src= {cartContext.currentFootClick !== "info"?"./footer_icon/Asset 10.png": "./footer_icon/infoFooter.png"} alt="infor-img"></img>
       <span>Info</span>
      </div>

      <div className="linkFooter userIcon" onClick={userClicking}>
        <img className= "iconBlock" src= {cartContext.currentFootClick !== "profile"?"./footer_icon/Asset 8.png": "./footer_icon/profileFooter.png"} alt="user-img"></img>
        <span>Profile</span>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
