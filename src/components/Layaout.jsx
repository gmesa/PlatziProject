import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Styles/Layaout.css'

const Layaout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      
      {children}

      <Footer />
    </div>
  );
};

export default Layaout;
