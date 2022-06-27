import React, { useContext } from 'react'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext'

const Header = () => {

  const state = useContext(AppContext);
  const {cart} = state.state;
  return (
    <div className='Header'>
        <h1 className='Header-title'>
           
            <Link to="/"> Platzi Merch</Link>
        </h1>
        <div className="Header-checkOut">
           <Link to="/Checkout">
            <i className='fas fa-shopping-basket'></i>
            </Link> 

            {cart.length > 0 && <div className='Header-alert' >{cart.length}</div>}
        </div>
    </div>
  )
}

export default Header