import React from "react";
import { Link } from "react-router-dom";
// import Entry from "./Entry";
import products from "../../products";
import Footer from "../Footer";
import HeaderCart from "../HeaderCart";

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
// function itemsCart() {
//   var arr = [],
//     keys = Object.keys(localStorage),
//     index = keys.length;
//   for (var i = 0; i < index; i++) {
//     var holdNum = window.localStorage.getItem(keys[i]);
//     holdNum = parseInt(holdNum);
//     if (keys[i].length > 15 && holdNum>0) {
//       arr.push(JSON.parse(keys[i]));
//     }
//   }
//   return arr;
// }

function Cart() {
  const [aFarm] = products;
  // const cartItems = itemsCart();

  return (
    <div>
      <header className="stickyCart"><HeaderCart farmName={aFarm.farmName}/></header>
      {/* <div className="cartPageBody">
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
      hello there */}
      <section id="section-address" className="cartPageBody">
        <h3 className="colorGreen">Delivery Address: </h3>
        <h3 className="h3InfoText">2931 Emerson Way Altadena, CA 91001</h3>
        <Link to="/cart" className="colorClick changeAddress">Change address </Link>
      </section>
      <hr className="hrsection"></hr>
      
      {/* <dl className="dictionary">{cartItems.map(createProduct)}</dl> */}
      <Footer />
    </div>
  );
}

export default Cart;
// {/* <Link to="/">Let's go back home</Link> */}
