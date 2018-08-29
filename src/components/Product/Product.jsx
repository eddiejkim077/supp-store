import React from 'react';
import './Product.css';

const Product = (props) => {
  return (
    <div>
      <article className="Product">
        <img src={props.product.image} alt={props.product.name} onClick={() => props.handleSelectedProduct(props.product)} />
        <p>Short Description Here</p>
        <button class="btn btn-primary"a onClick={() => props.handleSelectedProduct(props.product)} > View Product </button>
      </article>
    </div>
  )
}

export default Product;
