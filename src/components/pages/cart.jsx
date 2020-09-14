import React, {useState} from "react";
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

function changecp10(flag){
  if(flag){
    return "./coupon_img/coupon10Choice.png";
  }else{
    return "./coupon_img/coupon10.png";
  }
}

function changecp15(flag){
  if(flag){
    return "./coupon_img/coupon15Choice.png";
  }else{
    return "./coupon_img/coupon15.png";
  }
}

function changecp20(flag){
  if(flag){
    return "./coupon_img/coupon20Choice.png";
  }else{
    return "./coupon_img/coupon20.png";
  }
}

function Cart() {
  function listItem(items){
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

  //part 2: scrolling coupon
  const [cp10, setCoupon10] = useState(false);
  const [cp15, setCoupon15] = useState(false);
  const [cp20, setCoupon20] = useState(false);
  function clickCoupon10(){
    setCoupon10(!cp10);
  }

  function clickCoupon15(){
    setCoupon15(!cp15);
  }

  function clickCoupon20(){
    setCoupon20(!cp20);
  }

  var coupon10 = changecp10(cp10);
  var coupon15 = changecp15(cp15);
  var coupon20 = changecp20(cp20);

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

      <div className="">{products.map(listItem)}</div>

      {/* codes for scrolling coupon bar */}
      <div className="lineAboveCoupon">Choose one of the eligible promos to apply</div>
      <div className="scrolling-wrapper">
        <img className="card" onClick={clickCoupon10} src={coupon10} alt="coupon10%-img"></img>
        <img className="card" onClick={clickCoupon15} src={coupon15} alt="coupon15%-img"></img>
        <img className="card" onClick={clickCoupon20} src={coupon20} alt="coupon20%-img"></img>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft1">Subtotal</div>
        <div className="priceRight">$123</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3 colorPromo">
        <div className="contentLeft1">Promo applied</div>
        <div className="priceRight">-$123</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft1">Delivery Fee</div>
        <div className="priceRight">$1.50</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft1">Taxes</div>
        <div className="priceRight">$1.28</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft1"><b>Total</b></div>
        <div className="priceRight">$23.26</div>
      </div>

      <div className="justMakeSpace"><button className="PayBtn">Checkout with PayPal</button></div>
      <Footer />
    </div>
  );
}

export default Cart;
// {/* <Link to="/">Let's go back home</Link> */}
