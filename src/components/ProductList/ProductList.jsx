import React from 'react';
import Product from '../../components/Product/Product'
import './ProductList.css';

const ProductList = (props) => {
  var products = props.filter ? props.products.filter(p => p.productType === props.filter) : props.products;
  return (
    <section className="ProductList">
      <div>
        <div className="IconHelp">
          <table className="IconHelpTable">
            <tbody>
              <tr>
                <th>
                  <img 
                    alt="Protein"
                    onClick={() => props.handleFilter('Protein')} 
                    className="icon zoom" 
                    src="https://i.imgur.com/jakVcUf.png" 
                  />
                </th>
                <th>
                  <img 
                    alt="PreWorkout" 
                    onClick={() => props.handleFilter('Pre')} 
                    className="icon zoom" 
                    src="https://i.imgur.com/jGSoKm0.png" 
                  />
                </th> 
                <th>
                  <img 
                    alt="Vitamin"
                    onClick={() => props.handleFilter('Vitamin')} 
                    className="icon zoom" 
                    src="https://i.imgur.com/GjKBoLz.png" 
                  />
                </th>
                <th>
                  <img 
                    alt="Amino"
                    onClick={() => props.handleFilter('Amino')} 
                    className="icon zoom" 
                    src="https://i.imgur.com/br4lSRb.png" 
                    />
                </th>
                <th>
                    <img 
                      alt="Clear"
                      onClick={() => props.handleClearFilter()} 
                      className="Iconx zoom"
                      src="https://i.imgur.com/gMAjgJ6.png"
                    />
                </th>
              </tr>
              <tr>
                <td>Proteins</td>
                <td>Pre-workouts</td>
                <td>Vitamins & Minerals</td>
                <td>Amino Acids</td>
                <td>Clear Search</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="ProductList-Products">
        {products.map(p =>
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