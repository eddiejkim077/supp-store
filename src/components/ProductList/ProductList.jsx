import React from 'react';
import Product from '../../components/Product/Product'

const ProductList = (props) => {
  return (
    <section className="ProductList">
        <div>
            <h2>Product List</h2>
        </div>
        <div className="ProductList-Products">
                <ul> 
                    {props.products.map(p => 
                    <Product 
                        product={p}
                        handleAddItem={props.handleAddItem}
                    />
                )}
                </ul>
        </div>
    </section>
  )
};

export default ProductList;