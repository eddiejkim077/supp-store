import React from 'react';
import CartItem from '../CartItem/CartItem'

const CartItems = (props) => (
  <div className="CartItems">
    {props.items.length ?
      props.items.map(item => <CartItem 
        item={item}
        handleRemoveItem={props.handleRemoveItem}
        />)
        :
    <h3>No Items</h3>
  }
  </div>
)


export default CartItems;