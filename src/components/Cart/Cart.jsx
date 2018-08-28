import React from 'react';

import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
  // let total = props.cart.reduce((tot, item) => tot + parseFloat(item.product.price) * item.quantity, 0)
  return (
    <section>
      <CartItems 
        items={props.cart.items}
        handleRemoveItem={props.handleRemoveItem}
      />
      
      {/* {total !== 0 ? <div>Total: ${total} </div> : <div>You Have No Items In Cart Yet!</div>} */}
    </section>
  )
}

export default Cart;