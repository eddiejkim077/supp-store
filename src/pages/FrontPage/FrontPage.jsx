import React from 'react';
import './FrontPage.css';
import {Link} from 'react-router-dom';

const FrontPage = (props) => {
  return (
    <div className="FrontPage">
        <img src="https://i.imgur.com/BiVDNEp.png?1" />
        <Link to="/shop">View Our Products</Link>
    </div>
  )
}

export default FrontPage;