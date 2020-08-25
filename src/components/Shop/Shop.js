import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    //button Handler
    const handleAddProduct = (product) => {
        console.log(product)
    }
    console.log(products);
    return (
        <div className="shop-container">
            <div className="product-container">
                
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                         product={pd}></Product>)
                }
                
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            <h5>Order summery: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;