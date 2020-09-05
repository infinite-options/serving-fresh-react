import React, { useState } from "react";

function itemsCart() {
  var arr = [],
    keys = Object.keys(localStorage),
    index = keys.length;
  for (var i = 0; i < index; i++) {
    if (keys[i].length > 15) {
      arr.push(JSON.parse(keys[i]));
    }
  }
  return arr;
}

function Entry(props) {
  var tempName = props.img;
  //It will check the locolStorange every time it render to update state
  var holdItems = itemsCart();
  // var isPicked = false;
  var quantity = 0;
  for (var i = 0; i < holdItems.length; i++) {
    if (holdItems[i].id === props.id) {
      var item = holdItems[i];
      item = JSON.stringify(item);
      var stringAmount = window.localStorage.getItem(item);
      quantity = parseInt(stringAmount, 10);
    }
  }
  const [count, setCount] = useState(quantity);

  // Increase function will update state and udpate quantity to the localStorage
  function increase() {
    var holdCount1 = count + 1;
    setCount(holdCount1);
    var holdItem1 = props;
    window.localStorage.setItem(JSON.stringify(holdItem1), holdCount1);
  }

  // Decrease function will update state and udpate quantity to the localStorage
  function decrease() {
    var holdCount2 = count - 1;
    setCount(holdCount2);
    var holdItem2 = props;
    window.localStorage.setItem(JSON.stringify(holdItem2), holdCount2);
  }
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Fruit">
          <img src={props.img} alt={tempName.substring(12)} />
        </span>
      </dt>
      <div className="nameAndPrice">
        <dd className="prodName">{props.meaning}</dd>
        <dd className="prodPrice">{props.price}</dd>
      </div>
      <hr className="hrProduct" />
      <div className="numberOfItems">
        <button className="decreBtn" onClick={decrease}>
          -
        </button>
        <h3 className="amount">{count}</h3>
        <button className="increBtn" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default Entry;
