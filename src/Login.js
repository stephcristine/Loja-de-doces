import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './View/Login.css';
import UsuarioService from './services/UsuarioService';
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const data = { email: email, senha: senha };
      const response = await UsuarioService.login(data);
  
      if (response && response.data) {  
        localStorage.setItem('id_usuario', response.data.id_usuario);
        toast.success("Login realizado com sucesso!");
        navigate('/PaginaUsuario');
      } else {
        toast.error("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao fazer login. Tente novamente mais tarde.");
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input name="email" className="input" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
          <input name="senha" className="input" type="password" placeholder='Senha' onChange={(e) => setSenha(e.target.value)}/>
          <div className="login-actions">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
