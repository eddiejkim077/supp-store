import React from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage = (props) => {
  return (
    <div className="CartPage">
    {props.cart  &&   
      <Cart 
        cart={props.cart}
        handleRemoveQuantity={props.handleRemoveQuantity}
        handleAddItem={props.handleAddItem}
      />
    }
    </div>
  )
}

export default CartPage;