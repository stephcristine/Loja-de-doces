import React, { useState } from 'react';
import './View/Cadastro.css';
//import api from'./api.js';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [dtNas, setDtNas] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');

  function ValidacaoSenha(){
    if(senha !== senha2){
      alert("As senhas não são compativeis")
    }
  }

  return (
    <>
      <main>
        <div  className='container'>  
          <form className='formulario'> 
            <div className='row'>
              <div className="col1">
                <input type="text"value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)}/> 
              </div>
              <div className="col2">
                <input type="text"value={sobrenome} placeholder='Sobrenome' onChange={(e) => setSobrenome(e.target.value)}/>
              </div>
            </div>

            <div>
              <input type="email"value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
    
              <input type="date"value={dtNas} placeholder='Data de nascimento' onChange={(e) => setDtNas(e.target.value)}/>
            </div>
            
              <input type="text"value={cep} placeholder='CEP' onChange={(e) => setCep(e.target.value)}/>

            <div>
              <input type="password"value={senha} placeholder='Senha' onChange={(e) => setSenha(e.target.value)}/>
    
              <input type="password"value={senha2} placeholder='Digite a senha novamente' onChange={(e) => setSenha2(e.target.value)}/>
            </div>
              <button type="submit" onClick={ValidacaoSenha}>Enviar</button>
          </form>
        </div>
      </main>
    </>

  );
}