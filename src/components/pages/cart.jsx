import React from "react";
import { Link } from "react-router-dom";
// import Entry from "./Entry";
// import products from "../../products";
import Footer from "../Footer";
import HeaderCart from "../HeaderCart";
import CartItem from "./cartItem";
import { useHistory } from "react-router-dom";
// use history will help to redirect the path

// function createProduct(cartItems) {
//   return (
//     <Entry
//       name={cartItems.name}
//       price={cartItems.price}
//       img={cartItems.img}
//       meaning={cartItems.meaning}
//       id={cartItems.id}
//       key={cartItems.id}
//     />
//   );
// }

//imtemsCart() will return an array of all localStorage key that include only products
//and already been parse by JSON
//it will only take product incart that has more than 0 in value
function itemsCart() {
  var arr = [],
    keys = Object.keys(localStorage),
    index = keys.length;
  for (var i = 0; i < index; i++) {
    var holdNum = window.localStorage.getItem(keys[i]);
    holdNum = parseInt(holdNum);
    if (keys[i].length > 30 && holdNum>0) {
      arr.push(JSON.parse(keys[i]));
    }
  }
  return arr;
}



function Cart() {
  function listItem(items){
    // const getAllItems = itemsCart();
    // for(var i = 0; i<getAllItems.length;i++){
    //   if(getAllItems[i].id === items.id){
    //     quantityCurrentItem= parseInt(window.localStorage.getItem(JSON.stringify(getAllItems[i])));
    //   }
    // }
    return(
      <CartItem
        name = {items.name}
        price = {items.price}
        img={items.img}
        meaning={items.meaning}
        id={items.id}
        key = {items.id}
      />
    );
  }

  const address = "2931 Emerson Way Altadena, CA 91001";
  const deliverTime = "Wednesday Aug 20, 2020 between 6:00 pm to 8:00 pm";
  const history = useHistory();
  const goToShop = () => history.push("/");
  const products = itemsCart();
  return (
    <div>
      <header className="stickyCart"><HeaderCart/></header>
      <div className="threeBottonOrders">
        <button className="checkoutAndRefundBtn">Checkout</button>
        <button className="HistoryButton">History</button>
        <button className="checkoutAndRefundBtn">Refund</button>
      </div>

      <div className="eachBlockDiv">
        <div className="contentLeft">Delivery Address:</div>
        <div className="contentRight">{address}</div>
      </div>
      
      <div className="eachBlockDiv">
        <Link to="/cart" className="colorClick contentRight">Change address</Link>
      </div>

      <hr></hr>

      <div className="eachBlockDiv2">
        <div className="contentLeft">Expected Delivery:</div>
        <div className="contentRight">{deliverTime}</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft"><b>Your order</b></div>
        <div className="contentRight"><button className="addMoreBtn" onClick={goToShop}>+ Add items</button></div>
      </div>

      <hr></hr>

      <div className="justMakeSpace">{products.map(listItem)}</div>

      <Footer />
    </div>
  );
}

export default Cart;
// {/* <Link to="/">Let's go back home</Link> */}


/* <div className="cartPageBody">
        <div>
        <h3 className="colorGreen">Delivery Address: </h3>
        <h3 className="h3InfoText">2931 Emerson Way Altadena, CA 91001</h3>
        <Link to="/cart" className="colorClick changeAddress">Change address </Link>
        </div>
        <hr></hr>
        <div>
        <h3 className = "colorGreenDelivery">Expected Delivery: </h3>
        <h3>Wednesday, Sep 20, 2020 between 6:00 am to 10:00 am</h3>
        </div>
      </div>
      <div>hellow World</div>
      hello there */
      /* <section id="section-address" className="cartPageBody">
        <h3 className="colorGreen">Delivery Address: </h3>
        <h3 className="h3InfoText">2931 Emerson Way Altadena, CA 91001</h3>
        <Link to="/cart" className="colorClick changeAddress">Change address </Link>
      </section>
      <hr className="hrsection"></hr> */
      
      
      /* <dl className="dictionary">{cartItems.map(createProduct)}</dl> */