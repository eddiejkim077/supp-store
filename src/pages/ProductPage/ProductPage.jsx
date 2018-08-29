import React from 'react';
import './ProductPage.css';

const ProductPage = (props) => {
  return (
    <div className="ProductPage">
      <h1>{props.product.name}</h1>
      <hr />
      <div className="Image-Stack" >
        <img className="DisplayPhoto"src={props.product.prodShowImage} />
        <div class="card-body">
          <div className="ProductOverview">
            <h2>Nutrition</h2>
            <img id="nutrition-image"src={props.product.nutrImage} />
              <h2>Product Overview</h2>
              <p className="DescriptionCard">{props.product.description}</p>
              <button class="btn btn-primary" onClick={() => props.handleAddItem(props.product._id)}> ADD TO CART </button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ProductPage;