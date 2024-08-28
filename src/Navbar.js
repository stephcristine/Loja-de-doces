import logo from './imagens/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-buttons">
        {!isLoginPage && (
          <>
            <Link to="/Login" className="navbar-button">Login</Link>
          </>
        )}
        {isLoginPage && (
          <>
          <Link to="/" className="navbar-button">Home</Link>
          <Link to="PaginaUsuario" className="navbar-button">Usuário</Link>
          </>
        )}
      </div>
    </nav>
  );
}