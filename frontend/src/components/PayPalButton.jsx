import { useEffect, useRef } from 'react';
import "./paypal.css";

const PayPalButton = ({ price }) => {
  const paypalRef = useRef();

  useEffect(() => {
    // Clear the button container before re-rendering to avoid duplicate buttons
    if (paypalRef.current) {
      paypalRef.current.innerHTML = ''; 
    }

    // Check if PayPal is available
    if (window.paypal) {
      window.paypal.Buttons({
        // Set up the transaction when the button is clicked
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: price, // Use the updated price here
              }
            }]
          });
        },
        // Finalize the transaction after user approves the payment
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        },
        // Handle errors
        onError: (err) => {
          console.error('PayPal Checkout onError', err);
        }
      }).render(paypalRef.current);
    }
  }, [price]);  // Dependency on price ensures re-rendering when price changes

  return (
    <div className='pay'>
      <h4>PayPal Checkout</h4>
      <div ref={paypalRef} className='pay2'></div>
    </div>
  );
};

export default PayPalButton;
