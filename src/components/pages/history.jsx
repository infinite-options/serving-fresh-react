import React, { useState, useEffect} from "react";
import HeaderCart from "../HeaderCart";
import Footer from "../Footer";
import HistoryCard from "./HistoryCard"; 


function createHistoryCard(props){
    var holdItem = JSON.parse(props.items);
    console.log(holdItem);
    return(
        <HistoryCard
            shipping_address = {props.delivery_address}
            purchaseID = {props.purchase_uid}
            key = {props.payment_uid}
            id= {props.payment_uid}
            date = {props.purchase_date}
            price = {props.amount_paid}
            products = {holdItem}
            paymentID = {props.payment_uid}
        />
    );
}

function History(){
    var userEmail="tazi.arthur@hotmail.com";
    var url = "https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/history/" + userEmail;
    const [historyData, SetfetchData] = useState([]);
    const [hasHistoryError, setHasHistoryError] = useState(false);
    const [isHistoryLoading, setIsHistoryLoading] = useState(true);

    useEffect(() =>{
        let flag = false;
        const fetchData = async () =>{
          try{
            const response = await fetch(url);
            const responseData = await response.json();
            console.log("Got the Data");
            if(!flag){
                SetfetchData(responseData.result);
            }
          }catch(err){
            setHasHistoryError(true);
          } finally{
            console.log("finish loading");
            setIsHistoryLoading(false);
          }
        }
        fetchData();
    
        return() =>{
          flag= true;
        };
      }, [url]);

      if(!isHistoryLoading && !hasHistoryError){
        


        return(
            <div>
                <header className="stickyCart"><HeaderCart/></header>
                <div className="makeTopHistory">{historyData.map(createHistoryCard)}</div>
        
                <Footer />
            </div>);
      }




    return(
    <div>
        <header className="stickyCart"><HeaderCart/></header>
        <div className="historyDiv">Welcome to hsitory checkout!!!</div>
        

        <Footer />
    </div>);
}





export default History;