import React from 'react';

import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
  return (
    <CartItems 
      cart={props.cart}
    />
  )
}

export default Cart;