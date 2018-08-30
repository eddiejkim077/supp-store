import React from 'react';
import Product from '../../components/Product/Product'
import './ProductList.css';

const ProductList = (props) => {
  return (
    <section className="ProductList">
      <div>
        <div className="IconHelp">
          <table className="IconHelpTable">
            <tr>
              <th><img className="icon" src="https://i.imgur.com/jakVcUf.png" /></th>
              <th><img className="icon" src="https://i.imgur.com/jGSoKm0.png" /></th>
              <th><img className="icon" src="https://i.imgur.com/GjKBoLz.png" /></th>
            </tr>
            <tr>
              <td>Protein</td>
              <td>Energy</td>
              <td>Vitamins & Minerals</td>
            </tr>
          </table>
        </div>
        <h2>Product</h2>
      </div>
      <div className="ProductList-Products">
        {props.products.map(p =>
          <Product
            product={p}
            handleAddItem={props.handleAddItem}
            handleSelectedProduct={props.handleSelectedProduct}
          />
        )}
      </div>
    </section>
  )
};

export default ProductList;