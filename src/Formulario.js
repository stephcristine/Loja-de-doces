import React, { useState } from "react";
import './View/Formulario.css';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import UsuarioService from './services/UsuarioService';

export default function Formulario() {

  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    console.log("Formulário enviado");
    event.preventDefault();

    if (values.senha !== values.senha2) {
      return toast.error("As senhas não são compatíveis.");
    }

    if(
      !values.nome ||
      !values.sobrenome ||
      !values.data_nasc ||
      !values.email ||
      !values.senha ||
      !values.cep
    ){
      return toast.warn("Preencha todos os campos!");
    }

    try {
      console.log('Tentando cadastrar usuário...', values);
      await UsuarioService.cadastrarUsuario({
        nome: values.nome,
        sobrenome: values.sobrenome,
        email: values.email,
        data_nasc: values.data_nasc,
        cep: values.cep,
        senha: values.senha,
      });
    console.log('Usuário cadastrado com sucesso');
    toast.success("Usuário cadastrado com sucesso!");

    setTimeout(() => {
      navigate('/');
    }, 2000); 
    } catch (error) {
      console.log("Erro ao cadastrar usuário:", error);
      toast.error("Erro ao cadastrar usuário.");
    }
  };

  return (
    <> 
      <div className="container">
        <div className="container-form">
          <form className='formulario' onSubmit={handleSubmit}> 
            <h1 className="lable">CADASTRO</h1>
            <div>
              <input name="nome" className="input" type="text" placeholder='Nome' onChange={handleChanges}/> 
              <input name="sobrenome" className="input" type="text" placeholder='Sobrenome' onChange={handleChanges}/>
            </div>
            <div>
              <input name="email" className="input" type="email" placeholder='Email' onChange={handleChanges}/>
              <input name="data_nasc" className="input" type="date"  placeholder='Data de nascimento' onChange={handleChanges}/>
            </div>

            <input name="cep" className="input" type="text" placeholder='CEP' onChange={handleChanges}/>

            <div>
              <input name="senha" className="input" type="password" placeholder='Senha' onChange={handleChanges}/>
              <input name="senha2" className="input" type="password" placeholder='Digite a senha novamente' onChange={handleChanges}/>
            </div>

            <button className="button" type="submit">Enviar</button>
            
          </form>
        </div>
      </div>
    </>
  );
}
