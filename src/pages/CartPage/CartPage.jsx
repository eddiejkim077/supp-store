import React from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage = (props) => {
  return (
    <Cart cart={props.cart}/>
  )
}

export default CartPage;