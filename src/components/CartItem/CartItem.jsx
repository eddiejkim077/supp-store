import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
  return (
    <div className="CartItem">
      <div className="HeadingAndPic">
        <div className="HeadingAndIcon">
          <img className="Icon" src={props.item.product.icon} />
          <h2>{props.item.product.name}</h2>
        </div>
          <img className="HeadingImage" src={props.item.product.prodListImage} />
        </div>
        <div className="CartItem-Descriptions">
          <div className="QuantityAndSpinner">
            <h4>Quantity: </h4>
            <div className="InputSpinner">
              <input type="text" class="form-control" value={props.item.quantity} />
              <div className="input-group-vertical">
                <button class="btn btn-default" type="button" onClick={() => props.handleAddItem(props.item.product._id)}><i class="fa fa-caret-up"></i></button>
                <button class="btn btn-default" type="button" onClick={() => props.handleRemoveQuantity(props.item.product._id)}><i class="fa fa-caret-down"></i></button>
              </div>
            </div>
          </div>
          <h4>Price: {props.item.product.price}</h4>
      </div>
    </div>
  )
}

export default CartItem;
