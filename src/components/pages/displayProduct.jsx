import React from "react";
import Entry from "./Entry";
import products from "../../products";
import Footer from "../Footer";
import Header from "../Header";

function createProduct(products) {
  return (
    <Entry
      name={products.name}
      price={products.price}
      img={products.img}
      meaning={products.meaning}
      id={products.id}
      key={products.id}
    />
  );
}

function DisplayProduct() {
  const [aFarm] = products;
  return (
    <div>
      <header className="sticky"><Header farmName={aFarm.farmName}/></header>
       
      <dl className="dictionary">{products.map(createProduct)}</dl>
      <Footer />
    </div>
  );
}

export default DisplayProduct;
