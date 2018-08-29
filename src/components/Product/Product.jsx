import React from 'react';
import './Product.css';

const Product = (props) => {
  return (
    <div>
      <article className="Product">
        <img src={props.product.image} alt={props.product.name} />
        <div>
          <div>
            <button onClick={() => props.handleSelectedProduct(props.product)}> {props.product.name} </button> 
          </div>
        </div>
      </article>
    </div>
  )
}

export default Product;
