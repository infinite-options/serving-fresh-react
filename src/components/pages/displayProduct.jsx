import React, {useContext, useState, useEffect} from "react";
import Entry from "./Entry";
import Footer from "../Footer";
import Header from "../Header";
import someContexts from "../makeContext";

function createProduct2(products) {
  var tryItem = products.item_name.slice(products.item_name.indexOf("("),products.item_name.indexOf("(")+11);
  var itemName = products.item_name.slice(0,products.item_name.indexOf("("));
  // console.log(tryItem);
  return (
    <Entry
      name={itemName}
      price={products.item_price}
      img={products.item_photo}
      meaning={tryItem}
      business_uid= {products.itm_business_uid}
      id={products.item_uid}
      key={products.item_uid}
    />
  );
}

function sorting(prodChoice,copyFarm){
  var fruitItems= copyFarm, vegeItems=copyFarm,dessertItems = copyFarm, otherItems = copyFarm;
  if(!prodChoice.fruitSort){
    fruitItems = fruitItems.filter(farm => farm.item_type === "fruit");
  }else{
    fruitItems =[];
  }

  if(!prodChoice.vegeSort){
    vegeItems = vegeItems.filter(farm => farm.item_type === "vegetable");
  }else{
    vegeItems=[];
  }

  if(!prodChoice.dessertSort){
    dessertItems = dessertItems.filter(farm => farm.item_type === "dessert");
  }else{
    dessertItems=[];
  }

  if(!prodChoice.othersSort){
    otherItems = otherItems.filter(farm => farm.item_type === "other");
  }else{
    otherItems=[];
  }

  return [...fruitItems, ...vegeItems, ...dessertItems, ...otherItems];
}



function DisplayProduct() {
  var url ="https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/itemsByBusiness/200-000003";
  const[data,SetfetchData]= useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const prodChoice =useContext(someContexts);
  
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
  
  //because at the start of the fetching, it has nothing and that will cause error 
  //with this if condition, we only work if we get the data 
  if(!isLoading && !hasError){
    var holdItem = data;
    var copyFarm = holdItem;
    const farmName= "Resendiz";
    copyFarm = sorting(prodChoice,copyFarm);
    if(copyFarm.length === 0 && prodChoice.fruitSort && prodChoice.vegeSort && prodChoice.dessertSort && prodChoice.othersSort){
      copyFarm = holdItem;
    }
    return (
      <div>
       <header className="sticky"><Header farmName={farmName}/></header>
        <dl className="dictionary">{copyFarm.map(createProduct2)}</dl>
        <Footer />
     </div>
    );
  }else{
    return(
      <div>Please wait.. We are loading the products for you..!</div>
    );
  }
}

export default DisplayProduct;
