import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <label htmlFor="username">Email:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
          <div className="login-actions">
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="signup-button">Cadastro</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
