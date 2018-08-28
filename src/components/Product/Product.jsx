import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <div>
      <Link to={`/shopping/${props.product._id}`}> {props.product.name} </Link>
      <article className="Product">
        <img src={props.product.image} alt={props.product.name} />
        <div>
          <div>
            <span>{props.product.price}</span>
            <button onClick={() => props.handleAddItem(props.product._id)}> ADD TO CART </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Product;
