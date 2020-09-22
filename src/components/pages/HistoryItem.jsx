import React from "react";

function HistoryItem(props){
    return(
        <div>
            <div className="eachBlockDiv3 makeSpacebetweenItem">
                <hr></hr>
                <div className="contentLeft1 fixLocationOldItem">{props.itemName}</div>
                <div className="contentRight1 ">
                    <div className="quantityHistory fixLocationOldItem">{props.quantity}</div>
                    <div className="priceRight fixLocationOldItem">${props.itemPrice}</div>
                </div>
            </div>
        </div>
    );
}

export default HistoryItem;