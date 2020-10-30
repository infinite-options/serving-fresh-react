import React,{useContext} from "react";
import someContexts from "../makeContext";

function FarmCard(props){
    // const history = useHistory();
    // const goToCart = () => history.push("/cart");
    // const [isClicked,setClicked]= useState(false);

    const context =useContext(someContexts);

    function gotFarmClicked(){
        //so whenever a farm icon is clicked, this status will change 
        //if there is nothing in the click array, it will ad new farm name and only display farms with that name
        //else it will return to normal
        if(context.farmClicked.length ===0){
            context.setFarmClicked(props.businessName);
        }else{
            context.setFarmClicked("");
        }
        // console.log(context.farmClicked);
        if(context.newWeekDay.length === 0){
            // console.log(context.farmClicked,"inside if");
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
        <div className="imgAndName" onClick={gotFarmClicked}>
            <img className="limitSize" src={props.image} alt =""></img>
            <div className="farmNameFont">{props.businessName}</div>
        </div>
    );
}

export default FarmCard;