import React, { useState } from 'react';
import './View/Login.css';
import Header from './Components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  
  return (
    <>
      

      <div className='container'>
        <form className='formulario'>

          <div className='Login'>
            <h1>Login</h1>
          </div>

          <div className='divEmail'>
            <input type="email"value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className='divSenha'>
            <input type="password"value={senha} placeholder='Senha' onChange={(e) => setSenha(e.target.value)}/>
          </div>

          <button className='entrar' type="submit" onClick={0}>Entrar</button>
        </form>
      </div>
    </>
  );
}


//<span>Nome: {nome}</span>
//<span>Sobrenome: {sobrenome}</span>
//<span>Email: {nome}</span>
//<span>Data de Nascimento: {nome}</span>
//<span>CEP: {nome}</span>
//<span>Bairro: {nome}</span>
//<span>Rua: {nome}</span>
//<span>Número da casa: {nome}</span>
