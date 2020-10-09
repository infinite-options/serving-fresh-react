import { BrowserRouter } from "react-router-dom";
import React, {useState, useEffect} from "react";
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

  //this part will work for fatching and displaying the products of all items in shop
  var url ="https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/itemsByBusiness/200-000003";
  const[itemsFromFetchTodDisplay,SetfetchData]= useState([]);
  const [itemError, setHasError] = useState(false);
  const [itemIsLoading, setIsLoading] = useState(true);
  useEffect(() =>{
    let flag = false;
    const fetchData = async () =>{
      try{
        const response = await fetch(url);
        const responseData = await response.json();
        console.log("Got the Data");
        if(!flag){
          // console.log(responseData.result.result);
          SetfetchData(responseData.result.result);
        }
      }catch(err){
        setHasError(true);
      } finally{
        console.log("finish loading");
        setIsLoading(false);
      }
    }
    fetchData();

    return() =>{
      flag= true;
    };
  }, [url]);

  const [currentFootClick, setFootClick]= useState("days");
  return (
    <BrowserRouter>
      <someContexts.Provider value = {{cartTotal, setCartTotal, fruitSort, 
      setValFruit,vegeSort,setValVege,dessertSort,setValDessert,othersSort,setValOther,
      itemsFromFetchTodDisplay,itemError,itemIsLoading,currentFootClick,setFootClick}}>
        <Nav />
      </someContexts.Provider>     
    </BrowserRouter>
  );
}

export default App;

