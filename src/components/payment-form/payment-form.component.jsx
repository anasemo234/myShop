import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import { UserContext } from "../../contexts/user.context.jsx";

const PaymentForm = () => {
  const { cartTotal, cartItems } = useContext(CartContext);
  const [stringCartItems, setstringCartItems] = useState(cartItems);
  // console.log(cartItems)
  const [amount, setAmount] = useState(cartTotal);

  useEffect(() => {
    setAmount(cartTotal);
  }, [cartTotal]);

  const { currentUser } = useContext(UserContext);
  //   console.log(currUser);

  const [paymentLoading, setPaymentLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    setstringCartItems(JSON.stringify(cartItems));
    //  console.log("cart items" + stringCartItems);
  }, [cartItems]);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);

    const reply = {
      amount: amount * 100,
      description: stringCartItems,
    };

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reply),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;
    // console.log(clientSecret);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "guest",
        },
      },
    });
    console.log(paymentResult);

    setPaymentLoading(false);

    if (paymentResult.error) {
      alert("error" + paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment</h2>
        <hr />
        <CardElement />

        <Button buttonType="inverted">Pay Now</Button>
        {paymentLoading ? <h2>Your payment is being processed</h2> : null}
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
