import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar-auth">
      <Link to="/shop" className="NavBar-link">Shop</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/cart" className="NavBar-link"> Cart </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogOut}>Log Out</Link>
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
      <Link to="/" className="NavBar-link"> <img src="https://i.imgur.com/jkaSVHl.png" /> </Link>
      {nav}
      <h1 className="NavBar-Heading">Supps & Stuff</h1>
    </div>
  )
}

export default NavBar;