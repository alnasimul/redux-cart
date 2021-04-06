import React from 'react';

const Product = (props) => {
   // console.log(props);
    const {addToCart,product} = props
   //const {name,id} = props.product;
    return (
        <div style={{borderBottom: '1px solid black'}} >
            <h3>{product.name}</h3>
            <button onClick={() =>addToCart(product.id,product.name)}>Add to Cart</button>
        </div>
    );
};

export default Product;