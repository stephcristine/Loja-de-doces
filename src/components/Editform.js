import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import '../View/Formulario.css';
import { useNavigate } from 'react-router-dom';
import UsuarioService from '../services/UsuarioService';

export default function EditForm({ id_usuario, nome, sobrenome, data_nasc, email, cep, senha, setFormValues }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nome: nome || "",
    sobrenome: sobrenome || "",
    data_nasc: data_nasc || "",
    email: email || "",
    cep: cep || "",
    senha: senha || "",
    senha2: "" 
  });

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.senha !== values.senha2) {
      return toast.error("As senhas não são compatíveis.");
    }

    if (!values.nome || !values.sobrenome || !values.data_nasc || !values.email || !values.senha || !values.cep) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      await UsuarioService.editarUsuario(id_usuario, values);
      toast.success("Usuário atualizado com sucesso!");
      setFormValues(prevValues => prevValues.map(val => val.id_usuario === id_usuario ? values : val));
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error("Erro ao editar usuário:", error);
      toast.error("Erro ao editar usuário.");
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <form className='formulario' onSubmit={handleSubmit}> 
          <h1 className="lable">EDITAR</h1>
          <div>
            <input name="nome" className="input" type="text" value={values.nome} onChange={handleChanges} placeholder="Nome"/> 
            <input name="sobrenome" className="input" type="text" value={values.sobrenome} onChange={handleChanges} placeholder="Sobrenome"/>
          </div>
          <div>
            <input name="email" className="input" type="email" value={values.email} onChange={handleChanges} placeholder="Email"/>
            <input name="data_nasc" className="input" type="date" value={values.data_nasc} onChange={handleChanges}/>
          </div>
          <input name="cep" className="input" type="text" value={values.cep} onChange={handleChanges} placeholder="CEP" />
          <div>
            <input name="senha" className="input" type="text" value={values.senha} onChange={handleChanges} placeholder="Senha" />
            <input name="senha2" className="input" type="text" value={values.senha2} onChange={handleChanges} placeholder="Digite a senha novamente"/>
          </div>
          <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
