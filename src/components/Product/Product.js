import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    
    const {name, img, price, id} = product;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Id: {id}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product.name)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product; 

