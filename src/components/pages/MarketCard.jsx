import React,{useContext} from "react";
import someContexts from "../makeContext";

function MarketCard(props){
    // const history = useHistory();
    // const goToCart = () => history.push("/cart");
    // const [isClicked,setClicked]= useState(false);

    const context =useContext(someContexts);

    function gotClicked(){
        if(context.newWeekDay.length === 0){
            // console.log(JSON.parse(props.hour),"here");
            var obj = JSON.parse(props.hour);
            var arr = [];
            for(const property in obj){
                // console.log(property, obj[property][0]);
                if(!(obj[property][0]==="00:00:00" && obj[property][1]==="00:00:00")){
                    arr.push(property);
                }
            }
            // console.log(arr);
            context.setWeekDay(arr);
        }else{
            context.setWeekDay([]);
        }
    }

    return(
        <div className="imgAndName" onClick={gotClicked}>
            <img className="limitSize" src={props.image} alt =""></img>
            <div className="farmNameFont">{props.businessName}</div>
        </div>
    );
}

export default MarketCard;