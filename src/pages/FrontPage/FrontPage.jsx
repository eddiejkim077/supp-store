import React from 'react';
import './FrontPage.css';
import {Link} from 'react-router-dom';
import BestSelling from '../../components/BestSelling/BestSelling';

const FrontPage = (props) => {
  return (
    <div className="FrontPage">
        <img src="https://i.imgur.com/BiVDNEp.png?1" />
          <BestSelling />
        <Link to="/shop">Shop Now!</Link>
    </div>
  )
}

export default FrontPage;