import React from 'react';
import './CartItem.css';

const CartItem = (props) =>{
  return(
    <div className="CartItem">
      <p>
        <span>{props.item.product.name}</span><br />
        <span><img src={props.item.product.image}></img></span><br />
        <div className="CartItem-Descriptions">
          <span>{props.item.product.description}</span><br />
          Quantity: <span>{props.item.quantity}</span><br />
          Price: <span>{props.item.product.price}</span><br />
          <button onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button>
        </div>
      </p>
  </div>  
  )
}

export default CartItem;