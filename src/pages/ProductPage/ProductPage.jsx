import React from 'react';

const ProductPage = (props) => {
  return (
    <div className="ProductPage">
      <h1>{props.product.name}</h1>
      <h1>{props.product.description}</h1>
      <button onClick={() => props.handleAddItem(props.product._id)}> ADD TO CART </button>
    </div>
  )
}

export default ProductPage;