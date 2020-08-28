import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>only <strong> {stock} </strong>in stock - order soon</small></p>
                <button className="product-btn" onClick={ () => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;