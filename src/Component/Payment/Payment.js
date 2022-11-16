import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const stripePromise = loadStripe('pk_test_51LkNUFACoQlhc0Qheeqb54AyxBdsEKOR1TgaWHkqyKu4OCl2llDQ9jibEnGFkAsoW0un7zJCzCHDQD44VE3O0VrC006XvsDFeC');

const Payment = () => {
    return (
        <div className='w-full h-[300px] flex justify-center items-center'>
          <DynamicTitle title='Payment' />
            <div className='w-2/5 h-2/4 bg-white shadow-xl shadow-sky-300 p-5 rounded'>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
        </div>
    );
};

export default Payment;