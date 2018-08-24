import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import FrontPage from '../FrontPage/FrontPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => 
              <FrontPage />
            } />

            <Route exact path="/login" render={() => 
              <LoginPage />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
