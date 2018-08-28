import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cart: null
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

  handleRemoveItem = (product) => {
    this.setState(prevState => {
      var itemIdx = prevState.cart.findIndex(item => item.product === product);
      var item = prevState.cart[itemIdx];
      if (item.quantity === 1) {
        prevState.cart.splice(itemIdx, 1);
      } else {
        item.quantity--;
      }
      return prevState;
    })
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user }, function() {
      ordersAPI.getCart()
      .then(cart => this.setState({ cart }));
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar 
            user={this.state.user}
            handleLogOut={this.handleLogOut} 
            />
            <Switch>
              <Route exact path="/" render={() => 
                <FrontPage/>
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
              <Route exact path="/cart" render={({history}) =>
                <CartPage
                  cart={this.state.cart}
                  user={this.state.user}
                  history={history}
                />
              }/>
              <Route exact path="/shopping" render={(props) =>
                <ShopPage {...props}
                  handleAddItem={this.handleAddItem}
                />
              }/>
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
