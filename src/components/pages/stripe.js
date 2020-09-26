import React from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

const CheckoutFrom = () =>{
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod(
            {
                type: "card",
                card: elements.getElement(CardElement)
                // card: elements.
            }
        );

        if(!error) {
            console.log(paymentMethod);
            // const {id} = paymentMethod;
            console.log(error);

            // try{
            //     // const {data} = await axios.post("/pages/charge", {id, amount:100}); 
            //     //post to the endpoint for the backend teams
            //     //they will have th secrect stripe 
            //     console.log(data);
            // }catch(e){
            //     console.log(e);
            // }
        }
        
    };

    return <form onSubmit={handleSubmit}  className="stripeLayout">
        <CardElement />
        <button type = "submit" disabled={!stripe}> Pay</button>
    </form>;
}

const stripePromise = loadStripe("pk_test_51HUqnLCLN5t7iXmKAsWCLYgutHvePlcvB2U1rIr0ICPxJcR5PwX5E8skWMj8czWJeJKW5bfQs9DKfU9Ud7latqSi009Dmjb8Yu");

// Dynamically change the styles of an element
// window.addEventListener('resize', function(event) {
//     if (window.innerWidth <= 320) {
//       CardElement.update({style: {base: {fontSize: '13px'}}});
//     } else {
//       CardElement.update({style: {base: {fontSize: '16px'}}});
//     }
//   });
const PayStripe = () => {
    return(
        <Elements stripe={stripePromise}>
            <CheckoutFrom />
        </Elements>
    );
}


export default PayStripe;