import React, {useState,useContext} from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import HeaderCart from "../HeaderCart";
import CartItem from "./cartItem";
import { useHistory } from "react-router-dom";
import axios from "axios";
import someContexts from "../makeContext";
// use history will help to redirect the path

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

//this function calculate the number of items in the cart and set it to global hook context
function calTotal(){
  var amount = 0,
    keys = Object.keys(localStorage),
    index = keys.length;
  for (var i = 0; i < index; i++) {
    if (keys[i].length > 30) {
      var quantity= window.localStorage.getItem(keys[i]);
      amount += parseInt(quantity);
      // arr.push(JSON.parse(keys[i]));
    }
  }
  return amount;
}

function subPrice(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    var price = items[i].price;
    var number= parseInt(window.localStorage.getItem(JSON.stringify(items[i])));
    total += (price * number);
  }
  return total;
}

function changecp10(flag, hasCp, subTotal){
  if(hasCp && flag && subTotal >=60){
    return "./coupon_img/coupon10Choice.png";
  }else if(hasCp && subTotal >=60){
    return "./coupon_img/coupon10.png";
  }else{
    return "./coupon_img/coupon10grey.png";
  }
}

function changecp15(flag, hasCp, subTotal){
  if(hasCp && flag && subTotal >=75){
    return "./coupon_img/coupon15Choice.png";
  }else if(hasCp && subTotal >=75){
    return "./coupon_img/coupon15.png";
  }else{
    return "./coupon_img/coupon15grey.png";
  }
}

function changecp20(flag, hasCp, subTotal){
  if(hasCp && flag && subTotal >=90){
    return "./coupon_img/coupon20Choice.png";
  }else if(hasCp && subTotal >=90){
    return "./coupon_img/coupon20.png";
  }else{
    return "./coupon_img/coupon20grey.png";
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
        business_uid= {items.business_uid}
        id={items.id}
        key = {items.id}
      />
    );
  }

  const address = "2931 Emerson Way Altadena, CA 91001";
  const deliverTime = "Wednesday Aug 20, 2020 between 6:00 pm to 8:00 pm";
  const history = useHistory();
  const goToShop = () => history.push("/products");
  // const goToPayStripe = () => history.push("/stripe");
  const products = itemsCart();
  const endpoint_API= "https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/purchase_Data_SF";
  const cartContext = useContext(someContexts);

  //here is function after click pay with stripe
  //=> create a list of all items in cart and put info in an object to post to host
  function stripePay(){
    var allItemsHolder = products;
    var arrayOfItem = [];
    for(var i=0; i <allItemsHolder.length;i++){
      var packOgItems=
        {
        qty: parseInt(window.localStorage.getItem(JSON.stringify(allItemsHolder[i]))),
        name: allItemsHolder[i].name,
        price: allItemsHolder[i].price,
        item_uid: allItemsHolder[i].id
        }
      arrayOfItem.push(packOgItems);
    }

    arrayOfItem = JSON.stringify(arrayOfItem);
    console.log(arrayOfItem);
    console.log(typeof arrayOfItem);
    //now get "pur_business_uid"
    window.localStorage.clear();
    cartContext.setCartTotal(calTotal());

    const postInfo = {
      "pur_customer_uid" : "100-000009",
      "pur_business_uid" : "200-000001",
      "items" : arrayOfItem,
      "order_instructions" : "fast",
      "delivery_instructions" : "Keep Fresh",
      "order_type" : "meal",
      "delivery_first_name" : "xyz",
      "delivery_last_name" : "aad",
      "delivery_phone_num" : "6197872089",
      "delivery_email" : "abc@gmail.com",
      "delivery_address" : "790 Carrywood Way",
      "delivery_unit" : "9",
      "delivery_city" : "San Jose",
      "delivery_state" : "CA",
      "delivery_zip" : "95120",
      "delivery_latitude" : "37.2271302",
      "delivery_longitude" : "-121.8891617",
      "purchase_notes" : "purchase_notes",
      "start_delivery_date" : "2020-08-02 00:00:00",
      "pay_coupon_id" : "",
      "amount_due" : "53.75",
      "amount_discount" : "0",
      "amount_paid" : "53.75",
      "info_is_Addon" : "FALSE",
      "cc_num" : "4545",
      "cc_exp_date" : "2028-07-01 00:00:00",
      "cc_cvv" : "666",
      "cc_zip" : "99999",
      "charge_id" : "",
      "payment_type" : "STRIPE"
    }

    axios.post(endpoint_API,postInfo).then(response =>{
      console.log(response);
    }).catch(error =>{
      console.log(error);
    });
  }

  //here is function after click pay with paypal
  //=> create a list of all items in cart and put info in an object to post to host
  function paypalPay(){
    var allItemsHolder = products;
    var arrayOfItem = [];
    for(var i=0; i <allItemsHolder.length;i++){
      var packOgItems=
        {
        qty: parseInt(window.localStorage.getItem(JSON.stringify(allItemsHolder[i]))),
        name: allItemsHolder[i].name,
        price: allItemsHolder[i].price,
        item_uid: allItemsHolder[i].id
        }
      arrayOfItem.push(packOgItems);
    }

    arrayOfItem = JSON.stringify(arrayOfItem);
    console.log(arrayOfItem);
    console.log(typeof arrayOfItem);
    //now get "pur_business_uid"
    window.localStorage.clear();
    cartContext.setCartTotal(calTotal());

    const postInfo = {
      "pur_customer_uid" : "100-000009",
      "pur_business_uid" : "200-000001",
      "items" : arrayOfItem,
      "order_instructions" : "fast",
      "delivery_instructions" : "Keep Fresh",
      "order_type" : "meal",
      "delivery_first_name" : "xyz",
      "delivery_last_name" : "aad",
      "delivery_phone_num" : "6197872089",
      "delivery_email" : "abc@gmail.com",
      "delivery_address" : "790 Carrywood Way",
      "delivery_unit" : "9",
      "delivery_city" : "San Jose",
      "delivery_state" : "CA",
      "delivery_zip" : "95120",
      "delivery_latitude" : "37.2271302",
      "delivery_longitude" : "-121.8891617",
      "purchase_notes" : "purchase_notes",
      "start_delivery_date" : "2020-08-02 00:00:00",
      "pay_coupon_id" : "",
      "amount_due" : "53.75",
      "amount_discount" : "0",
      "amount_paid" : "53.75",
      "info_is_Addon" : "FALSE",
      "cc_num" : "4545",
      "cc_exp_date" : "2028-07-01 00:00:00",
      "cc_cvv" : "666",
      "cc_zip" : "99999",
      "charge_id" : "",
      "payment_type" : "Paypal"
    }

    axios.post(endpoint_API,postInfo).then(response =>{
      console.log(response);
    }).catch(error =>{
      console.log(error);
    });
  }

  

  //part 2: scrolling coupon
  const hasCoupon10 =true;
  const hasCoupon15 =true;
  const hasCoupon20 =true;

  const tax=0.05;
  const [cp10, setCoupon10] = useState(false);
  const [cp15, setCoupon15] = useState(false);
  const [cp20, setCoupon20] = useState(false);
  // const [hasHistory, setHistory] = useState(false);
  var shipFee =1.5;
  shipFee = (Math.floor(shipFee * 100) / 100).toFixed(2);
  var subprice= subPrice(products);
  var subpriceString =(Math.floor((subPrice(products)) * 100) / 100).toFixed(2);
  var coupon10 = changecp10(cp10,hasCoupon10,subprice);
  var coupon15 = changecp15(cp15,hasCoupon15,subprice);
  var coupon20 = changecp20(cp20,hasCoupon20,subprice);
  var couponValue;
  if(cp10){
    couponValue = 0.1;
  }else if(cp15){
    couponValue = 0.15;
  }else if(cp20){
    couponValue = 0.2;
  }else{
    couponValue = 0;
  }
  var promo = (Math.floor((couponValue * subprice) * 100) / 100).toFixed(2);
  var taxValue= (Math.floor((tax * subprice) * 100) / 100).toFixed(2);
  var finalPrice= (Math.floor(((couponValue * subprice) + (tax * subprice) + parseInt(shipFee) + subprice) * 100) / 100).toFixed(2);
  // var userEmail= "johnhay@gmail.com";

  function clickCoupon10(){
    console.log("Coupon 10 is clicked");
    if(hasCoupon10 && coupon10!=="./coupon_img/coupon10grey.png"){
      setCoupon10(!cp10);
      if(cp15){setCoupon15(!cp15);}
      if(cp20){setCoupon20(!cp20);}
    } 
  }

  function clickCoupon15(){
    console.log("Coupon 15 is clicked");
    if(hasCoupon15 && coupon15!=="./coupon_img/coupon15grey.png"){
      setCoupon15(!cp15);
      if(cp10){setCoupon10(!cp10);}
      if(cp20){setCoupon20(!cp20);}
    }
  }

  function clickCoupon20(){
    console.log("Coupon 20 is clicked");
    if(hasCoupon20 && coupon20!=="./coupon_img/coupon20grey.png"){
      setCoupon20(!cp20);
      if(cp10){setCoupon10(!cp10);}
      if(cp15){setCoupon15(!cp15);}
    }
  }

  console.log("coupon10 status: ",cp10);
  console.log("coupon15 status: ",cp15);
  console.log("coupon20 status: ",cp20);
  return (
    <div>
      <header className="stickyCart"><HeaderCart/></header>

      <div className="firstBlockDiv">
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
        <div className="priceRight">${subpriceString}</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3 colorPromo">
        <div className="contentLeft1">Promo applied</div>
        <div className="priceRight">-${promo}</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft1">Delivery Fee</div>
        <div className="priceRight">${shipFee}</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft1">Taxes</div>
        <div className="priceRight">${taxValue}</div>
      </div>

      <hr></hr>

      <div className="eachBlockDiv3">
        <div className="contentLeft1"><b>Total</b></div>
        <div className="priceRight">${finalPrice}</div>
      </div>

      <div className="justMakeSpace1" onClick={stripePay}><button className="PayBtn">Checkout with Stripe</button></div>
      <div className="justMakeSpace" onClick={paypalPay}><button className="PayBtn">Checkout with PayPal</button></div>
      <Footer />
    </div>
  );
}

export default Cart;
// {/* <Link to="/">Let's go back home</Link> */}
