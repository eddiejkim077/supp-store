import React from 'react';

const CartItem = (props) =>{
  return(
    <div className="CartItem">
      <p>
        <button onClick={() => props.handleRemoveItem(props.item.product)}> - </button>
        QTY:
        <span>{props.item.quantity}</span>&nbsp;&nbsp;&nbsp;{props.item.product.name}
      </p>
  </div>
  )
}

export default CartItem;