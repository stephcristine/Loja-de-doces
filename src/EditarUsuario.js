import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import EditForm from "./components/Editform";
import UsuarioService from './services/UsuarioService';

export default function FormularioEditar() {
  const [values, setValues] = useState([]);
  const userId = localStorage.getItem('id_usuario');

  useEffect(() => {
    if (userId) {
      UsuarioService.buscarUsuario(userId)
        .then(data => {
          console.log("dados:", data);
          setValues(data);
        })
        .catch(error => {
          console.error('Houve um erro ao buscar os dados:', error);
        });
    } else {
      console.error('ID do usuário não encontrado no localStorage.');
    }
  }, [userId]);

  return (
    <>
       <Navbar />
      {values.length > 0 ? (
        values.map((value) => {
          return (
            <EditForm 
              key={value.id_usuario}
              formValues={values}
              setFormValues={setValues}
              id_usuario={value.id_usuario}
              nome={value.nome}
              sobrenome={value.sobrenome}
              data_nasc={value.data_nasc}
              email={value.email}
              cep={value.cep}
              senha={value.senha}
            />
          )
        })
      ) : (
        <p>Sem dados para exibir.</p>
      )}

    </>
  );
}
