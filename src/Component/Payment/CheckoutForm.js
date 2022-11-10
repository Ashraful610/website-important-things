import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import {toast} from 'react-hot-toast'

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const price = 12;
    
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
      
         const card = elements.getElement(CardElement);
      
        if (card == null) {
            return;
         }
        
         const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
        error ? toast.error(error.message) : toast.success('Successfully completed')

        // confirm payment 
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: 'Jenny Rosen',
                },
              },
            },
          );
        
      if(intentError){
        toast.error(intentError.message);
      }
      else{
        toast.success('Successfully completed payment')
        console.log(paymentIntent);
      }
    }

    return (
    <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn btn-success btn-sm mt-5' disabled={!stripe || !clientSecret}>
          Pay
        </button>
    </form>
    );
};

export default CheckoutForm;