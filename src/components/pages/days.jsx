import React from "react";
import Footer from "../Footer";
import HeaderDays from "../HeaderDays";
import daysInWeek from "../../daysInWeek";
import DateCard from "./DateCard";

function createDateCard(props){
    return(
        <DateCard 
            weekDay = {props.weekDay}
            date = {props.date}
            id = {props.weekDay}
            key = {props.weekDay}
        />
    );
}

function Days(){
    const title= "Delivery Days";
    const allValidDay = daysInWeek;
    return (
        <div>
            <header className="sticky"><HeaderDays title={title}/></header>
            <dl className="dictionary">{allValidDay.map(createDateCard)}</dl>
            <Footer />
        </div>
    );
}



export default Days;