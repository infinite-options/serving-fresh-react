import { BrowserRouter } from "react-router-dom";
import React, {useState} from "react";
import Nav from "./Nav";
import someContexts from "./makeContext";

function App() {
  const [cartTotal, setCartTotal] = useState(0);
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

