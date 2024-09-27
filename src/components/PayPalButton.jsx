// import  { useEffect, useRef } from 'react';

// const PayPalButton = ({price}) => {
//   const paypalRef = useRef();
//   const isRendered = useRef(false);  // Add this flag to prevent double rendering

//   useEffect(() => {
//     if (isRendered.current) return;  // Skip if already rendered

//     if (window.paypal) {
//       window.paypal.Buttons({
//         // Set up the transaction when the button is clicked
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [{
//               amount: {
//                 value: '1' // Transaction amount
//               }
//             }]
//           });
//         },
//         // Finalize the transaction after user approves the payment
//         onApprove: (data, actions) => {
//           return actions.order.capture().then(details => {
//             alert(`Transaction completed by ${details.payer.name.given_name}`);
//           });
//         },
//         // Handle errors
//         onError: (err) => {
//           console.error('PayPal Checkout onError', err);
//         }
//       }).render(paypalRef.current);
//     }
    
//     isRendered.current = true;  // Mark as rendered
//   }, []);

//   return (
//     <div>
//       <h3>PayPal Checkout</h3>
//       <div ref={paypalRef}></div>
//     </div>
//   );
// };

// export default PayPalButton;
import { useEffect, useRef } from 'react';

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
    <div>
      <h3>PayPal Checkout</h3>
      <div ref={paypalRef}></div>
    </div>
  );
};

export default PayPalButton;
