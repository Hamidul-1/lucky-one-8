import React from 'react';


const Item = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <h3>Name:{cart}</h3>      
        </div>
    );
};

export default Item;