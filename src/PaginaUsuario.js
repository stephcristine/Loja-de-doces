import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View/PaginaUsuario.css';

export default function PaginaUsuario (){
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuario')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados:', error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="user-table">
          <h2>Lista de Usuários</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Data de nascimento</th>
                <th>E-mail</th>
                <th>Senha</th>
                <th>CEP</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id_usuario}>
                  <td>{user.nome}</td>
                  <td>{user.sobrenome}</td>
                  <td>{user.data_nasc}</td>
                  <td>{user.email}</td>
                  <td>{user.senha}</td>
                  <td>{user.cep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
