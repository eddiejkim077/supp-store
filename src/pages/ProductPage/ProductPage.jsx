import React from 'react';
import './ProductPage.css';
import productAPI from '../../utils/productAPI';


class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    productAPI.getProduct(this.props.match.params.id)
    .then(product => this.setState({product}))
  }

  render(props) {
    return (
    this.state.product ?
      <div className="ProductPage">
        <h1>{this.state.product.name}</h1>
        <hr />
        <div className="Image-Stack" >
          <img className="DisplayPhoto" src={this.state.product.prodShowImage} />
          <div class="card-body">
            <div className="ProductOverview">
              <h2>Nutrition</h2>
              <img id="nutrition-image" src={this.state.product.nutrImage} />
              <h2>Product Overview</h2>
              <p className="DescriptionCard">{this.state.product.description}</p>
              {this.props.user ? <button class="btn btn-primary" onClick={() => this.props.handleAddItem(this.state.product._id)}> ADD TO CART </button> : null}
            </div>
          </div>
        </div>
      </div>
      :
      null
    );
  }
}

export default ProductPage;