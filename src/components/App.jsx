import { BrowserRouter } from "react-router-dom";
import React, {useState} from "react";
import Nav from "./Nav";
import someContexts from "./makeContext";

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

function App() {
  const [cartTotal, setCartTotal] = useState(calTotal());
  const [fruitSort, setValFruit] = useState(true);
  const [vegeSort, setValVege] = useState(true);
  const [dessertSort, setValDessert] = useState(true);
  const [othersSort, setValOther] = useState(true);
  return (
    <BrowserRouter>
      <someContexts.Provider value = {{cartTotal, setCartTotal, fruitSort, 
      setValFruit,vegeSort,setValVege,dessertSort,setValDessert,othersSort,setValOther}}>
        <Nav />
      </someContexts.Provider>     
    </BrowserRouter>
  );
}

export default App;

