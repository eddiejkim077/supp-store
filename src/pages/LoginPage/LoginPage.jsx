import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div className="LoginPage">
      <NavBar />
      <LoginForm />

    </div>
  );
}

export default LoginPage;