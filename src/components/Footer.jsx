import React, {useState} from "react";

function Footer() {
  const [homeClick, setHome]= useState(true);
  const [orderClick, setOrder]= useState(true);
  const [infoClick, setInfo]= useState(true);
  const [userClick, setUser]= useState(true);

  function homeClicking(){
    setHome(!homeClick);
  }
  function orderClicking(){
    setOrder(!orderClick);
  }
  function infoClicking(){
    setInfo(!infoClick);
  }
  function userClicking(){
    setUser(!userClick);
  }
  return (
    <footer className="stickyFooter">
    <div>
      <div className={homeClick ? "linkFooter homeIcon" : "linkFooter homeIcon colorClick"} onClick={homeClicking}>
      <img className= "iconBlock" src= {homeClick?"./footer_icon/Asset 1.png": "./footer_icon/daysFooter.png"} alt="card-img"></img>
       {/* <i className="fas fa-home fa-3x iconBlock" ></i> */}
        <span>Days</span>
      </div>

      <div className={orderClick ? "linkFooter orderIcon" : "linkFooter orderIcon colorClick"} onClick={orderClicking}>
       <img className= "iconBlock" src= {orderClick?"./footer_icon/Asset 9.png": "./footer_icon/refundFooter.png"} alt="dollar-img"></img>
        {/* <i className="fas fa-dollar-sign fa-3x iconBlock"></i> */}
       <span>Orders</span>
      </div>

      <div className={infoClick ? "linkFooter infoIcon" : "linkFooter infoIcon colorClick"} onClick={infoClicking}>
        <img className= "iconBlock" src= {infoClick?"./footer_icon/Asset 10.png": "./footer_icon/infoFooter.png"} alt="infor-img"></img>
       {/* <i className="fas fa-info-circle fa-3x iconBlock"></i> */}
       <span>Info</span>
      </div>

      <div className={userClick ? "linkFooter userIcon" : "linkFooter userIcon colorClick"} onClick={userClicking}>
        <img className= "iconBlock" src= {userClick?"./footer_icon/Asset 8.png": "./footer_icon/profileFooter.png"} alt="user-img"></img>
       {/* <i className="fas fa-user-circle fa-3x iconBlock"></i> */}
        <span>Profile</span>
      </div>
    </div>
    </footer>
  );
}

export default Footer;



// import { useHistory } from "react-router-dom";
// use history will help to redirect the path

// const history = useHistory();
  // const goToCart = () => history.push("/cart");

  // {/* <button className="checkOutBtn" onClick={goToCart}>
  //       Processed
  //     </button> */}
  //     {/* <img 
  //    className="homeFooter" src="../footer_icon/home.png" alt="home-icon"/>
  //     <img
  //       className="refundIcon"
  //       src="../footer_icon/refund.png"
  //       alt="refund-icon"

  //     />
  //     <img
  //       className ="infoFooter"
  //       src="../footer_icon/information.png"
  //       alt="information-icon"
  //     /> */}