import React from 'react';
import './ProductPage.css';

const ProductPage = (props) => {
  return (
    <div className="ProductPage">
      <h1>{props.product.name}</h1>
      <img src={props.product.image} />
      <p>{props.product.description}</p>
            
      <button onClick={() => props.handleAddItem(props.product._id)}> ADD TO CART </button>
    </div>
  )
}

export default ProductPage;