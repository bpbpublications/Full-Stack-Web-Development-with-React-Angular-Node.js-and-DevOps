// 05_stripe_integration/StripeCheckout.jsx
// Wraps CheckoutForm inside Stripe's <Elements>, as hinted by the code snippet.

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_12345_your_publishable_key_here');

function StripeCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default StripeCheckout;
