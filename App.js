import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import homeimg from './assets/homeimg.png';
import logo from './assets/logo.png';
import Venda from './Venda';
import Login from './Login';

// Componente da página inicial
function HomePage() {
  return (
    <div className="content">
      <img src={homeimg} alt="Confeitaria" className="content-photo" />
      <div className="text-and-button">
        <div className="content-text">
          <h1 className="content-title">
            Descubra o Mundo dos Doces como Nunca Antes!
          </h1>
          <p className="content-subtitle">
            Explore nossa seleção irresistível de doces gourmet e artesanais.
            Qualidade premium, entrega rápida e a doçura que você merece.
            Encontre seu sabor favorito e torne cada momento mais doce com a
            gente!
          </p>
        </div>
        <Link to="/Venda" className="content-button">Venda</Link>
      </div>
    </div>
  );
}

// Componente de exemplo para a página 404
function NotFound() {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-buttons">
        {!isLoginPage && (
          <>
            <Link to="/" className="navbar-button">Home</Link>
            <Link to="/Venda" className="navbar-button">Venda</Link>
            <Link to="/Login" className="navbar-button">Login</Link>
          </>
        )}
        {isLoginPage && (
          <Link to="/" className="navbar-button">Home</Link>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Venda" element={<Venda />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
