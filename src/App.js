import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './View/App.css';
import HomePage from './HomePage';
import Login from './Login';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Formulario from './Formulario'
import PaginaUsuario from './PaginaUsuario';
import Venda from './Venda'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Formulario />} />
        <Route path="/PaginaUsuario" element={<PaginaUsuario />} />
        <Route path="/Venda" element={<Venda />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
