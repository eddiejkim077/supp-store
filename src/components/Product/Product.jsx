import React from 'react';


const Product = (props) => {
    return(
        <div>
            <article className="Product">
                <div>
                    <h3> {props.product.name} </h3>
                    <p> {props.product.description} </p>
                    <div>
                        <span>{props.product.sku}</span>
                        <button onClick={() => props.handleAddItem(props.product)} >ADD TO CART</button>
                        <span>{props.product.price}</span>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Product;
