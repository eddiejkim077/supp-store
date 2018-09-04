import React from 'react';
import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = (props) => {
  return (
    <div className="CartItem">
      <div className="HeadingAndPic">
        <div className="HeadingAndIcon">
          <img className="Icon" src={props.item.product.icon} />
          <h2>{props.item.product.name}</h2>
        </div>
          <Link to={`/shop/${props.item.product._id}`}><img className="HeadingImage" src={props.item.product.prodListImage} /></Link>
        </div>
        <div className="CartItem-Descriptions">
          <div className="QuantityAndSpinner">
            <h4>Quantity: </h4>
            <div className="InputSpinner">
              <input type="text" class="form-control" value={props.item.quantity} />
              <div className="input-group-vertical">
                <button type="button" class="btn btn-default" onClick={() => props.handleAddItem(props.item.product._id)}><i class="fa fa-caret-up" /></button>
                <button type="button" class="btn btn-default" onClick={() => props.handleRemoveQuantity(props.item.product._id)}><i class="fa fa-caret-down" /></button>
              </div>
            </div>
          </div>
          <h4>Price: {parseFloat(props.item.product.price * props.item.quantity).toFixed(2)}</h4>
      </div>
    </div>
  )
}

export default CartItem;
