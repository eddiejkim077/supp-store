import React from 'react';

import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
  let total = props.cart.items.reduce((tot, item) => tot + (item.product.price * item.quantity), 0);
  return (
    <section>
      <h1>Your Cart Items</h1>
      <CartItems 
        items={props.cart.items}
        handleRemoveItem={props.handleRemoveItem}
      />

      <h2>total: ${total}</h2>
    </section>
  )
}

export default Cart;