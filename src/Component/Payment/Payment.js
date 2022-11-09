import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = () => {
    return (
        <div className='w-full h-[300px] flex justify-center items-center'>
            <div className='w-2/5 h-2/4 bg-white shadow-xl shadow-sky-300 p-5 rounded'>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
        </div>
    );
};

export default Payment;