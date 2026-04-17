// 05_stripe_integration/CheckoutForm.jsx

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [processing, setProcessing] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    // In a real app, fetch clientSecret from your backend:
    // const { clientSecret } = await fetch('/create-payment-intent').then(r => r.json());
    const clientSecret = 'pi_test_secret_client_secret_placeholder';

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement }
    });

    if (result.error) {
      setError(result.error.message || 'Payment failed');
    } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
      setSuccess('Payment succeeded!');
    }

    setProcessing(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing…' : 'Pay'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default CheckoutForm;
