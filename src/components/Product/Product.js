import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name, img, price, id} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Id: {id}</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to cart</p>
            </button>
            
        </div>
    );
};

export default Product;