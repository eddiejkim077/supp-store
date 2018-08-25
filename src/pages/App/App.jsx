import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import userService from '../../utils/userService';
import './App.css';
import FrontPage from '../FrontPage/FrontPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import NavBar from '../../components/NavBar/NavBar';
import { PromiseProvider } from 'mongoose';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

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

 
  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
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
                <FrontPage />
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
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
