import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from './imagens/logo.png';
import DropDownUsuario from './components/DropDownUsuario';

export default function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';
  const isUserPage = location.pathname === '/PaginaUsuario';

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-buttons">
        {isUserPage && <DropDownUsuario />}
        {!isLoginPage ? (
          <Link to="/Login" className="navbar-button">Login</Link>
        ) : (
          <>
            <Link to="/" className="navbar-button">Home</Link>
            <Link to="/PaginaUsuario" className="navbar-button">Usuário</Link>
          </>
        )}
      </div>
    </nav>
  );
}