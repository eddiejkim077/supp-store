import React from 'react';

const ProductPage = (props) => {
  return (
    <h1>Hello from product page {props.item._id.name} </h1>
  )
}

export default ProductPage;