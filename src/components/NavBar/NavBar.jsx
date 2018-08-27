import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar-auth">
      <Link to="/" className="NavBar-link"> Home Page </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogOut} >Log Out</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/cart" className="NavBar-link"> Cart </Link>
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    </div>
    :
    <div className="NavBar-unauth">
      <Link to="/login" className="NavBar-link" > Login </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link" > Sign Up </Link>
    </div>
  return(
    <div className="NavBar">  
      {nav}
    </div>
  )
}

export default NavBar;