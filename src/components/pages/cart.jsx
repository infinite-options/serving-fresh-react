import React from "react";
// import { Link } from "react-router-dom";
import Entry from "./Entry";
import products from "../../products";
import Footer from "../Footer";
import HeaderCart from "../HeaderCart";

function createProduct(cartItems) {
  return (
    <Entry
      name={cartItems.name}
      price={cartItems.price}
      img={cartItems.img}
      meaning={cartItems.meaning}
      id={cartItems.id}
      key={cartItems.id}
    />
  );
}

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
    if (keys[i].length > 15 && holdNum>0) {
      arr.push(JSON.parse(keys[i]));
    }
  }
  return arr;
}

function Cart() {
  const [aFarm] = products;
  const cartItems = itemsCart();

  return (
    <div>
      <header className="stickyCart"><HeaderCart farmName={aFarm.farmName}/></header>
      <dl className="dictionary">{cartItems.map(createProduct)}</dl>
      <Footer />
    </div>
  );
}

export default Cart;
// {/* <Link to="/">Let's go back home</Link> */}
