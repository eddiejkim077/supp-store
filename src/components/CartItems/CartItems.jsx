import React from 'react';
import CartItem from '../CartItem/CartItem';

import './CartItems.css';
const CartItems = (props) => (
  <div className="CartItems">
    {props.items.length ?
      props.items.map(item => 
        <CartItem 
          item={item}
          handleRemoveQuantity={props.handleRemoveQuantity}
          handleAddItem={props.handleAddItem}
        />)
    :
      <h3>No Items</h3>
    }
  </div>
)

export default CartItems;