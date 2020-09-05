import React from "react";
import { useHistory } from "react-router-dom";
// use history will help to redirect the path
function Footer() {
  const history = useHistory();
  const goToCart = () => history.push("/cart");
  return (
    <footer className="stickyFooter">
      <button className="checkOutBtn" onClick={goToCart}>
        Processed
      </button>
      <img 
     className="homeFooter" src="../footer_icon/home.png" alt="home-icon"/>
      <img
        className="refundIcon"
        src="../footer_icon/refund.png"
        alt="refund-icon"

      />
      <img
        className ="infoFooter"
        src="../footer_icon/information.png"
        alt="information-icon"
      />
    </footer>
  );
}

export default Footer;
