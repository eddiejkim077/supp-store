import React from 'react';
import Product from '../../components/Product/Product'
import './ProductList.css';

const ProductList = (props) => {
  return (
    <section className="ProductList">
      <div>
        <h2>Supplement Lookup</h2>
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