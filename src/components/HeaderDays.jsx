import React, { useContext } from "react";
import someContexts from "./makeContext";
import { Link } from "react-router-dom";
// import daysInWeek from "../daysInWeek";
import DateCard from "./pages/DateCard";

function createDateCard(props){
  return(
      <DateCard 
          weekDay = {props.weekDay}
          month = {props.month}
          day = {props.day}
          weekDayFull = {props.weekDayFull}
          id = {props.weekDay}
          key = {props.weekDay}
      />
  );
}

function createDefault7Day(){
  var days = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
  var months= ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  var default7Days = [];
  for(var i =0; i< 7;i++){
    var today = new Date();
    today.setDate(today.getDate()+1+i);
    var newDay ={
      weekDay : days[today.getDay()],
      month : months[today.getMonth()],
      day : today.getDate(),
      weekDayFull: fullDays[today.getDay()]
    }
    default7Days.push(newDay);
  }
  return default7Days;
}

function makeFilterDay(defaultDay,updateDay){
  var arr= [];
  for(var i =0; i<updateDay.length;i++){
    for(var j =0;j<defaultDay.length;j++){
      if(updateDay[i]===defaultDay[j].weekDayFull){
        var holdNewDate = defaultDay[j];
        arr.push(holdNewDate);
      }
    }
  }

  return arr.reverse();
}

function HeaderDays(props) {
  const cartContext = useContext(someContexts);
  var itemsAmount = cartContext.cartTotal;
  //variable: a set of day need to display 
  var allValidDay = createDefault7Day();
  // console.log(allValidDay);
  if(cartContext.newWeekDay.length !== 0){
    allValidDay = makeFilterDay(allValidDay,cartContext.newWeekDay);
    // console.log(testUpdateDay);
  }

  return(<div>
    <h2 className="h2Header">{props.title}</h2>
    <Link className="link" to="/cart">
      <div id="ex4">
        <span className="p1 fa-stack fa-2x has-badge" data-count={itemsAmount}>
        <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
        </span>
      </div>
    </Link>
    <hr className="blackHrHeaderSHop"></hr>

    <div className="scrolling-wrapper daysCard">
      <div>{allValidDay.map(createDateCard)}</div>
    </div>
   </div> );
}

export default HeaderDays;

