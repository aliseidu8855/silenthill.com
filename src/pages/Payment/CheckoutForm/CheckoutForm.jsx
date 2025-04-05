import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

const CheckoutForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or Elements not initialized.");
      return;
    }

    setIsProcessing(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {},
        // Use "if_required" to prevent automatic redirects
        redirect: "if_required",
      });

      if (error) {
        console.error("Payment Error:", error);
        setErrorMessage(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log("Payment Succeeded:", paymentIntent);
        onSuccess(); // Trigger the onSuccess callback to show the modal
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h3 className="text-center mb-4 text-gray-700 font-semibold">
        You are donating ${amount}
      </h3>
      <PaymentElement className="payment-element" />
      <button
        className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay now"}
      </button>
      {errorMessage && (
        <div className="text-red-500 mt-3 text-center">{errorMessage}</div>
      )}
    </form>
  );
};

export default CheckoutForm;
