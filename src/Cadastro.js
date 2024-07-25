import React, { useState } from 'react';
import './App.css';
import api from'./api.js';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [dtNas, setDtNas] = useState('');
  const [cep, setCep] = useState({});
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [input, setInput] = useState('');

  function ValidacaoSenha(){
    if(senha !== senha2){
      alert("As senhas não são compativeis")
    }
  }

  async function handleSearch(){
    if(input === ''){
      alert("Preecha algum CEP!");
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
    }catch{
      alert("Ops erro ao buscar");
      setInput("")
    }
  }
  return (
    <div className='container'>
      <form className='formulario'>
        <div className='divNome'>
          <input type="text"value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
        </div>

        <div className='divSobrenome'>
          <input type="text"value={sobrenome} placeholder='Sobrenome' onChange={(e) => setSobrenome(e.target.value)}/>
        </div>
        
        <div className='divEmail'>
          <input type="email"value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className='divData'>
          <input type="date"value={dtNas} placeholder='Data de nascimento' onChange={(e) => setDtNas(e.target.value)}/>
        </div>

        <div className='divCEP'>
          <input type="text"value={input} placeholder='CEP' onChange={(e) => setInput(e.target.value)}/>
          <button type='submit'onClick={handleSearch}>Buscar</button>
        </div>

        {Object.keys(input).length > 0 &&(
         
          <main className="main">
            <span>{cep.cep}</span>
            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
          </main>
        )}

        <div className='divSenha'>
          <input type="password"value={senha} placeholder='Senha' onChange={(e) => setSenha(e.target.value)}/>
        </div>

        <div className='divSenha2'>
          <input type="password"value={senha2} placeholder='DIgite a senha novamente' onChange={(e) => setSenha2(e.target.value)}/>
        </div>

        <button type="submit" onClick={ValidacaoSenha}>Enviar</button>
      </form>
    </div>
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
