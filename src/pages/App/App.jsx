import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import userService from '../../utils/userService';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';

import productAPI from '../../utils/productAPI';
import ordersAPI from '../../utils/ordersAPI';

import FrontPage from '../FrontPage/FrontPage';
import LoginPage from '../LoginPage/LoginPage';
import CartPage from '../CartPage/CartPage'
import SignupPage from '../SignupPage/SignupPage';
import ShopPage from '../ShopPage/ShopPage';
import ProductPage from '../ProductPage/ProductPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cart: null,
      products: [],
      filter: ''
    }
  }

  handleLogOut = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleAddItem = (productId) => {
    productAPI.addProduct(productId)
    .then(cart => {
      this.setState({ cart });
    }); 
  }

  handleRemoveQuantity = (productId) => {
    productAPI.removeProduct(productId)
    .then(cart => {
      this.setState({ cart });
    });
  }

  handleSelectedProduct = (product) => {
    this.props.history.push(`/shop/${product._id}`);
  }

  handleFilter = (filter) => {
    this.setState({filter});
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user }, function() {
      if (user) {
        ordersAPI.getCart()
        .then(cart => this.setState({ cart }));
      }
    });
  }

  render() {
    console.log(this.state.productType, this.state.filter);
    return (
      <div className="App">
        <React.Fragment>
          <NavBar 
            user={this.state.user}
            handleLogOut={this.handleLogOut} 
          />
          <Switch>
            <Route exact path="/" render={() => 
              <FrontPage
                user={this.state.user}
              />
            }/>
            <Route exact path="/login" render={(props) => 
              <LoginPage {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path="/signup" render={(props) => 
              <SignupPage  {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path="/cart" render={( props) =>
              <CartPage {...props}
                cart={this.state.cart}
                user={this.state.user}
                handleRemoveQuantity={this.handleRemoveQuantity}
                handleAddItem={this.handleAddItem}
              />
            }/>
            <Route exact path="/shop" render={(props) =>
              <ShopPage {...props}
                filter={this.state.filter}
                handleSelectedProduct={this.handleSelectedProduct}
                handleFilter={this.handleFilter}
              />
            }/>
            <Route exact path="/shop/:id" render={(props) =>
              <ProductPage {...props}
                handleAddItem={this.handleAddItem}
                user={this.state.user}
              />
              }/>
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
