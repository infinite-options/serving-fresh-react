import React, {useContext} from "react";
import Footer from "../Footer";
import HeaderDays from "../HeaderDays";
import someContexts from "../makeContext";
import FarmCard from "./FarmCard";
import MarketCard from "./MarketCard";
// import daysInWeek from "../../daysInWeek";
// import DateCard from "./DateCard";

// function createDateCard(props){
//     return(
//         <DateCard 
//             weekDay = {props.weekDay}
//             date = {props.date}
//             id = {props.weekDay}
//             key = {props.weekDay}
//         />
//     );
// }


function createFarmCard(props){
    return(
        <FarmCard 
            image= {props.business_image}
            businessName={props.business_name}
            hour = {props.business_hours}
            id = {props.business_uid}
            key = {props.business_uid}
        />
    );
}

function createMarketCard(props){
    return(
        <MarketCard 
            image= {props.business_image}
            businessName={props.business_name}
            hour = {props.business_hours}
            id = {props.business_uid}
            key = {props.business_uid}
        />
    );
}

function Days(){
    const title= "Delivery Days";
    const topNode =useContext(someContexts);
    // const allValidDay = daysInWeek;
    if(topNode.busIsLoad && !topNode.busError){
        var farms= topNode.defaultBussines;
        var farmerMarket = topNode.market;

        //if a farm is clicked
        if(topNode.farmClicked.length !==0){
            var pickedFarm =[];
            var newMarketList =[];
            var currentPicked = {}; 
            for(var i=0;i<topNode.defaultBussines.length;i++){
                if(topNode.defaultBussines[i].business_name === topNode.farmClicked){
                    pickedFarm.push(topNode.defaultBussines[i]);
                    currentPicked=topNode.defaultBussines[i];
                }
            }
            // console.log(currentPicked);
            var farmTeam = currentPicked.business_association;
            if(farmTeam !==null){
                // console.log(farmTeam);
                farmTeam = JSON.parse(farmTeam);
                // console.log(farmTeam);  

                for(var i=0;i<farmTeam.length;i++){
                    for(var j=0;j<topNode.market.length;j++){
                        if(farmTeam[i]===topNode.market[j].business_uid){
                            newMarketList.push(topNode.market[j]);
                        }
                    }
                }
            }
            
            farms=pickedFarm;
            farmerMarket=newMarketList;
        }
        // console.log(allBusiness);
        return (
            <div>
                <header className="sticky headerheightDaysPage"><HeaderDays title={title}/></header>
                <div className="bodyDays">
                    <p className="indentFilteringLine">Filter By <mark className="greenWord">Farmer's market</mark></p>
                    <div className="scrolling-wrapper">{farmerMarket.map(createMarketCard)}</div>

                    <p className="indentFilteringLine">Filter By <mark className="greenWord">Farms</mark></p>
                    <div className="scrolling-wrapper">{farms.map(createFarmCard)}</div>
                </div>
                <Footer />
            </div>
         );
    }
    
    return (
        <div>
            <header className="sticky headerheightDaysPage"><HeaderDays title={title}/></header>
            <div>We are gathering farm-logo</div>
            {/* <dl className="dictionary">{allValidDay.map(createDateCard)}</dl> */}
            <Footer />
        </div>
     );
}



export default Days;