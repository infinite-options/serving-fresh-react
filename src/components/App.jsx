import { BrowserRouter } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import someContexts from "./makeContext";
// import { response } from "express";
import axios from "axios";

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
  const [itemIsLoading, setIsLoading] = useState(false);

  //this useEffect fetch the data of all items
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
        setIsLoading(true);
      }
    }
    fetchData();

    return() =>{
      flag= true;
    };
  }, [url]);

  
  const [currentFootClick, setFootClick]= useState("days");
  const [defaultBussines, setnewBussiness] = useState([]);
  const [market, setMarket] = useState([]);
  const [busIsLoad, setBusLoading]= useState(false);
  const [busError,setBusError]= useState(false);
  //this state will notify if one of the farm is clicked or not
  const[farmClicked,setFarmClicked]= useState("");
  //this is the state of all market's farms
  const[allMarketFarm,setMarketFarms]= useState([]);
  // console.log(farmClicked);
  var businessURL="https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/Categorical_Options/-121.928472,37.24370";

  useEffect(()=>{
    axios.get(businessURL).then(response=>{
      // console.log(response.data.result);
      // console.log(response.data.result[3].business_association);
      var initalBus = response.data.result;
      var marketFarm=[];
      var notMarketFarm =[];
      for(var i=0;i<initalBus.length;i++){
        if(initalBus[i].business_type ==="Farmers Market"){
          marketFarm.push(initalBus[i]);
        }else{
          notMarketFarm.push(initalBus[i]);
        }
      }
      setMarket(marketFarm);
      setnewBussiness(notMarketFarm);

      // var mainArr =[];
      // if(marketFarm.length!==0){
      //   for(var i=0 ; i<marketFarm.length;i++){
      //     var newArr =[];
      //     for(var j=0;j<notMarketFarm.length;j++){
      //       var holdAssociate = notMarketFarm[j].business_association;
      //       if(holdAssociate !==null){
      //         holdAssociate = JSON.parse(holdAssociate);
      //         for(var k=0;k<holdAssociate.length;k++){
      //           if(holdAssociate[k] === marketFarm.business_uid){
      //             newArr.push(notMarketFarm[j]);
      //           }
      //         }
      //       }
      //     }
      //     var nameAndAssosicateFarms =[marketFarm[i].business_uid,newArr]
      //     mainArr.push(nameAndAssosicateFarms);
      //   }
      // }
      // console.log(mainArr);
    }).catch(er =>{
      setBusError(true);
      console.log(er);
    }).finally(() =>{
      console.log("Business is loaded");
      setBusLoading(true);
    })
  },[businessURL]);

  //if user wants to filtering day
  const [newWeekDay, setWeekDay] = useState([]);
  
  return (
    <BrowserRouter>
      <someContexts.Provider value = {{cartTotal, setCartTotal, 
          fruitSort, setValFruit,vegeSort,setValVege,dessertSort,setValDessert,othersSort,setValOther,
          itemsFromFetchTodDisplay,itemError,itemIsLoading,
          currentFootClick,setFootClick,
          defaultBussines, busIsLoad,busError,
          newWeekDay,setWeekDay,
          market,setMarket,
          farmClicked,setFarmClicked}}>
        <Nav />
      </someContexts.Provider>     
    </BrowserRouter>
  );
}

export default App;

