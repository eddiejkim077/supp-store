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
          handleAddItem={props.handleAddItem}
        />
        <div className="CartTotal position-fixed">
          <h4>subtotal: ${total}</h4>
          <h4 className="CartTotalTax">tax: 7.25%</h4>
          <h2>total: ${parseFloat(total + (total * .0725)).toFixed(2)}</h2>
        </div>
      </div>
    </section>
  )
}

export default Cart;