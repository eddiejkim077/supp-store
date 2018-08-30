import React from 'react';
import './FrontPage.css';
import {Link} from 'react-router-dom';
const FrontPage = (props) => {
  return (
    <div className="FrontPage">
      <p>#1 Leading Supplement Company</p>
      {props.user ? <Link to="/shop">Shop Now!</Link> : <p>Login First To Shop!</p>}
    </div>
  )
}

export default FrontPage;