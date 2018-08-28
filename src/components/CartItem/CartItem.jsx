import React from 'react';

const CartItem = (props) =>{
  return(
    <div className="CartItem">
      <p>
        QTY:
        <span>{props.item.name}</span>
        <span>{props.item.price}</span>
        <button onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button>
      </p>
  </div>  
  )
}

export default CartItem;