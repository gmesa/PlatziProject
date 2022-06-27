import React, { useContext } from 'react';
import '../Styles/Payment.css'
import AppContext from '../context/AppContext';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom'


const Payment = () => {

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useNavigate();


  const handleSumTotal = () => {

    const reducer = (acc, current) => acc + current.price;
    const total = cart.length > 0 ? cart.reduce(reducer, 0) : 0;
    return total;
  }

  const paymentHandleSuccess = (data) => {
    
    if (data.status == 'COMPLETED') {
      const newOrder = {
        buyer: buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history('/checkout/success');
    }
  }


  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen de pedidos</h3>

        {
          cart.map(item => (
            <div className="Payment-item" key={item.id}>
              <div className="Payment-element">
                <h4>
                  {item.title}
                </h4>
                <span>
                  $ {' '} {item.price}
                </span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">

          <PayPalButtons
            style={{ layout: "vertical", shape: 'rect' }}
            disabled={false}
            createOrder={(data, actions) =>
              actions.order
                .create({
                  purchase_units: [
                    {
                      amount: {
                        value: Number.parseFloat(handleSumTotal()).toFixed(2),
                      },
                    },
                  ],
                })
                .then((orderId) => {
                  return orderId;
                })
            }
            onApprove={(data, actions) => {
              return actions.order
                .capture()
                .then((data) => {
                  // Your code here after capture the
                  paymentHandleSuccess(data);
                })
                .catch((error) => console.log(error));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
