import React from "react";

function Header(props) {
  return(<div>
    <img className="userIconHeader"  src="../footer_icon/person (2).png" alt="user-icon"/>
    <h2 className="h2Header">Farms</h2>
    <div id="ex4">
      <span class="p1 fa-stack fa-2x has-badge" data-count="4">
      {/* <i class="p2 fa fa-circle fa-stack-2x"></i>  */}
      <i class="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
      </span>
    </div>
    <div className="backArrow">
      <i class="fas fa-chevron-left"> Back</i>
    </div>
    
   </div> );
}

export default Header;
