import React, {useState} from "react";
import './View/Formulario.css';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export default function Formulario() {

  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChanges = (value) => {

    setValues((preValue) => ({
      ...preValue, [value.target.name] : value.target.value,
    }));

  };

  const handleSubmit = (event) => {

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
      axios.post("http://localhost:3001/usuario", {
        nome: values.nome,
        sobrenome: values.sobrenome,
        email: values.email,
        data_nasc: values.data_nasc,
        cep: values.cep,
        senha: values.senha,
    });
    toast.success("Usuário cadastrado com sucesso!");
    setTimeout(() => {
      navigate('/');
    }, 1000);
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