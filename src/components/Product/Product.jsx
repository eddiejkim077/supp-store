import React from 'react';
import './Product.css';

const Product = (props) => {
  return (
    <div>
      <article className="Product">
        <img src={props.product.prodListImage} alt={props.product.name} />
        <p>{props.product.shortdes}</p>
        <img className="Icon" src={props.product.icon} />
        <h3 id="product-price">${props.product.price}</h3>
        <button className="btn btn-primary" onClick={() => props.handleSelectedProduct(props.product)} > View Product </button>
      </article>
    </div>
  )
}

export default Product;
