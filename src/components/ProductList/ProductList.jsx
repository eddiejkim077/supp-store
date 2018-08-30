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
              <th><img className="icon" src="https://i.imgur.com/br4lSRb.png" /></th>
            </tr>
            <tr>
              <td>Proteins</td>
              <td>Pre-workouts</td>
              <td>Vitamins & Minerals</td>
              <td>Amino Acids</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="ProductList-Products">
        {props.products.map(p =>
          <Product
            product={p}
            handleSelectedProduct={props.handleSelectedProduct}
          />
        )}
      </div>
    </section>
  )
};

export default ProductList;