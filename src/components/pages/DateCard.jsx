import React from "react";
import { useHistory } from "react-router-dom";
function DateCard(props){
    const history = useHistory();
    const goToCart = () => history.push("/products");
    return(
        <div className="dateCardcss"  onClick={goToCart}>
            <div className="weekDayDiv">{props.weekDay}</div>
            <div className="dateDiv">{props.month} {props.day}</div>
        </div>
    );
}

export default DateCard;

/* <div className="dateCardcss"  onClick={goToCart}>
            <dt>
                <div className="weekDayDiv">{props.weekDay}</div>
            </dt>
            <div className="dateDiv">{props.date}</div>
        </div> */