import React from "react";
import HistoryItem from "./HistoryItem";

function createProductCardHis(props){
    return(<HistoryItem 
        quantity= {props.qty}
        itemName = {props.name}
        itemPrice = {props.price}
        id ={props.paymentID}
        key = {props.paymentID}
    />);
}

function HistoryCard(props){
    var oldItems=props.products;
    return(<div>
        <div className="firstBlockDivHistory">
            <div className="contentLeftHistory">
                <i className="fas fa-check-circle lightGreentick"></i> Order Completed
                <div className="dateBought">{props.date}</div>
                <div className="dateBought">Order {props.purchaseID}</div>
            </div>
            <div className="contentRight"><button className="RateBtn" >Rate Order</button></div>
        </div>
        <div>{oldItems.map(createProductCardHis)}</div>
        {/* <hr className="totalHr"></hr> */}

        <div className="eachBlockDiv3">
            <hr></hr>
            <div className="contentLeft1 fixLocationOldItem"><b>Total</b></div>
            <div className="contentRight1 ">
                <div className="priceRight fixLocationOldItem">${props.price}</div>
            </div>
        </div>

        <div className="div2btn">
            <button className="ViewBtn" >View Receipt</button>
            <button className="HelpBtn" >Get Help</button>
        </div>

        <hr className="lastHr"></hr>

    </div>);
}




export default HistoryCard;