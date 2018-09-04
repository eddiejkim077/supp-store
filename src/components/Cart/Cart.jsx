import React from 'react';
import './Cart.css';
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
  let total = props.cart.items.reduce((tot, item) => tot + (item.product.price * item.quantity), 0);
  return (
      <section className="Cart">
        <div className="CartAndTotal">
          <CartItems 
            items={props.cart.items}
            handleRemoveQuantity={props.handleRemoveQuantity}
            handleAddItem={props.handleAddItem}
          />
            <div className="CartTotal position-fixed">
              <h4> Billing Address </h4>
              <label for="fname"><i class="fa fa-user" /> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Eddie J. Kim" />
              <label for="adr"><i class="fa fa-address-card-o" /> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
              <label for="city"><i class="fa fa-institution" /> City</label>
              <input type="text" id="city" name="city" placeholder="Pasadena" />
              <div className="StateAndZip">
                  <label for="state">State</label>
                  <input type="text" id="state" name="state" placeholder="CA" />
                  <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="91106" />
              </div>
              <h4>subtotal: ${parseFloat(total).toFixed(2)}</h4>
              <h4 className="CartTotalTax">tax: 7.25%</h4>
              <h2>total: ${parseFloat(total + (total * .0725)).toFixed(2)}</h2>
          </div>
        </div>
      </section>
  )
}

export default Cart;