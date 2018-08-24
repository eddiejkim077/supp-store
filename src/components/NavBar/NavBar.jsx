import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return(
    <div>
      <Link to="/login" className="NavBar-link" > Login </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/" className="NavBar-link" > Front Page </Link>
    </div>
  )
}

export default NavBar;