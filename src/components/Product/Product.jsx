import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <div>
      <article className="Product">
        <img src={props.product.image} alt={props.product.name} />
        <div>
          <h3> {props.product.name} </h3>
          <Link to={`/product/${props.id}`}></Link>
          <div>
            <span>{props.product.price}</span>
            <button onClick={() => props.handleAddItem(props.product._id)} >ADD TO CART</button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Product;
