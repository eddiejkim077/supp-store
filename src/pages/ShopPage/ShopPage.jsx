import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import productAPI from '../../utils/productAPI';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        productAPI.index().then(products => {
            this.setState({products})
        });
    }

    render() {
        return (
            <div className="ShopPage">
                <div>
                    <ProductList 
                        products={this.state.products}
                        handleAddItem={this.props.handleAddItem}
                        handleSelectedProduct={this.props.handleSelectedProduct}
                    />
                </div>
            </div>
        )
    }
}

export default ShopPage;