import React from 'react';
import './CartItem.css';

const CartItem = (props) =>{
  return(
    <div className="CartItem">
      <div className="HeadingAndPic">
        <h2>{props.item.product.name}</h2>
        <img src={props.item.product.prodListImage} />
      </div>
        <div className="CartItem-Descriptions">
          <h4>Quantity: {props.item.quantity}</h4>
          <h4>Price: {props.item.product.price}</h4>
          {/* <button onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button> */}
        </div>
  </div>  
  )
}

export default CartItem;