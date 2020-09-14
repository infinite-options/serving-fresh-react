import React, {useState, useContext} from "react";
import someContexts from "../makeContext";
// imtemsCart() will return an array of all localStorage key that include only products
// and already been parse by JSON
// it will only take product incart that has more than 0 in value
function itemsCart(cur) {
    var numOfItem = 0,
      keys = Object.keys(localStorage),
      index = keys.length;
    var item= JSON.stringify(cur);
    for (var i = 0; i < index; i++) {
        if(item === keys[i]){
            numOfItem = parseInt(window.localStorage.getItem(keys[i]));
        }
    }
    return numOfItem;
}

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

function CartItem(props){
    const cartContext = useContext(someContexts);
    var getQuantity = itemsCart(props);
    var totalPrice = props.price * getQuantity;
    const [counter, setCounter] = useState(getQuantity);

    function decrease(){
        var holdCount2 = counter - 1;
        if(holdCount2 >= 0){
            setCounter(holdCount2);
            var holdItem2 = props;
            window.localStorage.setItem(JSON.stringify(holdItem2), holdCount2);
            cartContext.setCartTotal(calTotal());
        }else{
            console.log("You can't order negative amount of products");
        }
    }

    function increase(){
        var holdCount1 = counter + 1;
        setCounter(holdCount1);
        var holdItem1 = props;
        window.localStorage.setItem(JSON.stringify(holdItem1), holdCount1);
        cartContext.setCartTotal(calTotal());
    }

    return<div>
        <div className="eachBlockDiv3">
            <div className="contentLeft1">{props.name}{props.meaning}</div>
            <div className="contentRight1">
                <span onClick={decrease}><i className="fas fa-minus colorClick"></i></span>
                <div className="counterItemCart">{counter}</div>
                <span onClick={increase}><i className="fas fa-plus colorClick"></i></span>
                <div className="priceRight">${totalPrice}</div>
            </div>
        </div>
        <hr></hr>
    </div>;
}


export default CartItem;