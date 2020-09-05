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

// imtemsCart() will return an array of all localStorage key that include only products
//and already been parse by JSON
function itemsCart() {
  var arr = [],
    keys = Object.keys(localStorage),
    index = keys.length;
  for (var i = 0; i < index; i++) {
    if (keys[i].length > 15) {
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
      <HeaderCart farmName={aFarm.farmName} />
      <dl className="dictionary">{cartItems.map(createProduct)}</dl>
      <Footer />
    </div>
  );
}

export default Cart;
// {/* <Link to="/">Let's go back home</Link> */}
