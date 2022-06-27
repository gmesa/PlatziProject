import React, { useContext } from 'react';
import '../Styles/Checkout.css'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCar } = useContext(AppContext);
  const { cart } = state;

  const total = cart.length > 0 ? cart.reduce((acc, current) => acc + current.price, 0) : 0;

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>
          Lista de pedidos
        </h3>

        {cart.map(itemcart => (
          <div className="Checkout-item" key={itemcart.id}>
            <div className="Checkout-element" >
              <h4>{itemcart.title}</h4>
              <span> ${itemcart.price}</span>
            </div>
            <button type='button' onClick={() => removeFromCar(itemcart)}>
              <i className='fas fa-trash-alt'></i>
            </button>
          </div>

        ))}


      </div>

      <div className="Checkout-sidebar">
        <h3>Precio total: ${total} </h3>
        <Link to="/Checkout/Information"> <button type='button'>Contitnuar pedido</button></Link>

      </div>
    </div>

  )
};

export default Checkout;
