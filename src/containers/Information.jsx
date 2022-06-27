import React, { useRef, useContext } from 'react';
import '../Styles/information.css'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext';

const Information = () => {

  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const history = useNavigate();

  const handleSubmit = ()=>{
    const formData = new FormData(form.current);

    const buyer = {
      'name': formData.get('name'),
      'email':formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),

    }

    addToBuyer(buyer);
    history('/checkout/payment');
  }


  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informaciond de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" id="" />
            <input type="text" placeholder="Email" name="email" id="" />
            <input type="text" placeholder="Direccion" name="address" id="" />
            <input type="text" placeholder="Apto" name="apto" id="" />
            <input type="text" placeholder="Pais" name="country" id="" />
            <input type="text" placeholder="Estado" name="state" id="" />
            <input type="text" placeholder="Codigo postal" name="cp" id="" />
            <input type="text" placeholder="Telefono" name="phone" id="" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/CheckOut">Regresar</Link>
          </div>
          <div className="Information-next">
           <button type='button' onClick={handleSubmit}>Pagar</button>

          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos</h3>
        {cart.map(item => (
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Information;
