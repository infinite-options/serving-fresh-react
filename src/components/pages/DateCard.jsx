import React from "react";
import { useHistory } from "react-router-dom";
function DateCard(props){
    const history = useHistory();
    const goToCart = () => history.push("/cart");
    return(
        <div className="term dateCardcss" onClick={goToCart}>
            <dt>
                <div className="weekDayDiv">{props.weekDay}</div>
            </dt>
            <div className="dateDiv">{props.date}</div>
        </div>
    );
}

export default DateCard;