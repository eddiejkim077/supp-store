import React from 'react';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div className="LoginPage">
      <h2 className="LoginPageMessage">{props.location.message}</h2>        
        <LoginForm 
          handleLogin={props.handleLogin}
          {...props}
        />
    </div>
  );
}

export default LoginPage;