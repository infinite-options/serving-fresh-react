import React from "react";
import Footer from "../Footer";
import HeaderDays from "../HeaderDays";


function Days(){
    const title= "Delivery Days";
    return (
        <div>
            <header className="sticky"><HeaderDays title={title}/></header>

            <Footer />
        </div>
    );
}



export default Days;