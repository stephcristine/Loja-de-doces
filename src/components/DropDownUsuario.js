import React, { useState, useEffect, useRef } from 'react';
import '../View/DropDownUsuario.css';
import UsuarioService from '../services/UsuarioService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DropDownUsuario = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDirection, setDropDirection] = useState('down');
  const [users, setUsers] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const id_usuario = localStorage.getItem('id_usuario');
      if (id_usuario) {
        UsuarioService.buscarUsuario(id_usuario)
          .then(user => {
            console.log("Usuário recebido:", user); 
            setUsers([user]); 
          })
          .catch(error => console.error('Erro ao buscar usuário:', error));
      } else {
        console.log('ID do usuário não encontrado no localStorage.');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isOverflowing = rect.bottom > viewportHeight;
      setDropDirection(isOverflowing ? 'up' : 'down');
    }
  }, [isOpen]);

  const handleToggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleEditar = () => {
    navigate("/EditarUsuario");
  };

  const handleDeletar = () => {
    const id_usuario = localStorage.getItem('id_usuario');
    if (id_usuario) {
      UsuarioService.deletarUsuario(id_usuario)
        .then(() => {
          setUsers([]);
          toast.success('Usuário deletado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao deletar usuário:', error);
          toast.error('Erro ao deletar usuário.');
        });
    } else {
      console.log('ID do usuário não encontrado no localStorage.');
    }
  };

  return (
    <div className={`dropdown ${dropDirection === 'up' ? 'open-up' : ''}`} ref={dropdownRef}>
      <button className="navbar-button dropdown-button" onClick={handleToggleDropdown}>
        Usuário
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropContainer">
            <div>
              <div className="data-container-dropc">Nome</div>
              <div className="data-container-dropc">Sobrenome</div>
              <div className="data-container-dropc">Data de Nascimento</div>
              <div className="data-container-dropc">E-mail</div>
              <div className="data-container-dropc">Senha</div>
              <div className="data-container-dropc">CEP</div>
            </div>
            {users.map(user => (
              <div key={user.id_usuario} className="data-container user-info">
                <div className="user-info-dropc">{user.nome}</div>
                <div className="user-info-dropc">{user.sobrenome}</div>
                <div className="user-info-dropc">{user.data_nasc}</div>
                <div className="user-info-dropc">{user.email}</div>
                <div className="user-info-dropc">{user.senha}</div>
                <div className="user-info-dropc">{user.cep}</div>
              </div>
            ))}
          </div>
          <button className="edbutton" onClick={handleEditar}>Editar</button>
          <button className="delbutton" onClick={handleDeletar}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default DropDownUsuario;
