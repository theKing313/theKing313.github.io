import React from 'react'
import './Payment.scss'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './PaymentForm';

export default function StripeContainer() {
    const PUBLIC_KEY = "pk_test_51Nm9IQLRWAD1wBbd2ik5DkxwNZGL4PetCG6pafJdWV5IqxemwFu2WEPZF0WLYwoi4x6XeGQYbH6dAYMEC36kRpBc00Y5C5TAyi" as string

    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    const stripeTestPromise = loadStripe(PUBLIC_KEY)
    return (
        <Elements stripe={stripeTestPromise} >
            <CheckoutForm />
        </Elements>
    )
}













