import React from 'react';
import CartItem from '../CartItem/CartItem'

const CartItems = (props) => {
  return(
    <div className="CartItems">
      {props.cart.map(item => <CartItem 
        item={item}
      />)}
    </div>
  )
}

export default CartItems;