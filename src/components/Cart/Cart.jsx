import React from 'react';
import './Cart.css';
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
  let total = props.cart.items.reduce((tot, item) => tot + (item.product.price * item.quantity), 0);
  return (
    <section className="Cart">
      <h1>Cart</h1>
      <div className="CartAndTotal">
        <CartItems 
          items={props.cart.items}
          handleRemoveItem={props.handleRemoveItem}
          // handleAddItem={props.handleAddItem}
        />
        <h2 className="CartTotal position-fixed">total: ${total}</h2>
      </div>
    </section>
  )
}

export default Cart;