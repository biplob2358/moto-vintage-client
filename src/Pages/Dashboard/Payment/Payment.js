import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);
console.log(stripePromise)


const Payment = () => {
    const booking = useLoaderData();
    const { resaleValue, bikeName } = booking;
    return (
        <div className='text-center'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-center my-8'>Payment for {bikeName}</h2>
                <p className="text-xl">Please Pay <strong>{resaleValue}</strong> BDT</p>
                <div className='flex justify-center mt-8 '>
                    <div className='w-96 my-12 border p-12 shadow-xl rounded-xl '>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                booking={booking}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;