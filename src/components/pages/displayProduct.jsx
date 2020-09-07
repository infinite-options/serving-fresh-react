import React, {useContext} from "react";
import Entry from "./Entry";
import products from "../../products";
import Footer from "../Footer";
import Header from "../Header";
import someContexts from "../makeContext";

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

function sorting(prodChoice,copyFarm){
  var fruitItems= copyFarm, vegeItems=copyFarm,dessertItems = copyFarm, otherItems = copyFarm;
  if(!prodChoice.fruitSort){
    fruitItems = fruitItems.filter(farm => farm.type === "fruits");
  }else{
    fruitItems =[];
  }

  if(!prodChoice.vegeSort){
    vegeItems = vegeItems.filter(farm => farm.type === "vegetable");
  }else{
    vegeItems=[];
  }

  if(!prodChoice.dessertSort){
    dessertItems = dessertItems.filter(farm => farm.type === "dessert");
  }else{
    dessertItems=[];
  }

  if(!prodChoice.othersSort){
    otherItems = otherItems.filter(farm => farm.type === "others");
  }else{
    otherItems=[];
  }

  return [...fruitItems, ...vegeItems, ...dessertItems, ...otherItems];
}

function DisplayProduct() {
  var copyFarm = products;
  const [aFarm] = copyFarm;
  const prodChoice =useContext(someContexts);
  copyFarm = sorting(prodChoice,copyFarm);
  if(copyFarm.length ===0){
    copyFarm = products;
  }

  return (
    <div>
      <header className="sticky"><Header farmName={aFarm.farmName}/></header>
      <dl className="dictionary">{copyFarm.map(createProduct)}</dl>
      <Footer />
    </div>
  );
}

export default DisplayProduct;
