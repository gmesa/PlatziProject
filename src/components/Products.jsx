import React, {useContext} from 'react'
import Product from './Product'
import '../Styles/Products.css'
import AppContext from '../context/AppContext'


const Products = () => {

    const {state, addToCar } = useContext(AppContext);
    const {products} = state;

    const handleAddToCar = (product)=> {
        addToCar(product);
    }

    return (
        <div className='Products'>
            <div className='Products-items'>
                {
                    products.map(productItem => (
                        <Product key={productItem.id} product={productItem} handleAddToCar={handleAddToCar}/>
                    ))
                }

            </div>

        </div>
    )
}

export default Products