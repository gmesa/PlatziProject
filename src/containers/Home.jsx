import React from 'react';
import InitialState from '../InitialState';
import Products from '../components/Products';


const Home = () => {
    return <Products Products={InitialState.products}/>
};

export default Home;
