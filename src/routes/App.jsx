import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import CheckOut from '../containers/CheckOut';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layaout from '../components/Layaout'
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {

  const initalState = useInitialState();

  return (
    <PayPalScriptProvider options={{"client-id": "AZ59tI5jcDztZHeLBbwsZSL0xxo0s92SotNEmoweGNQLKUwFWn8Vt_dn4SQ9Nir9EEvtxTEcPQ8eMNjU",
                                    currency: "USD"}}>
    <AppContext.Provider value={initalState}>
    <BrowserRouter>
    <Layaout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/checkout/information" element={<Information />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layaout>
    </BrowserRouter>
    </AppContext.Provider>
    </PayPalScriptProvider>
  );
};

export default App;
