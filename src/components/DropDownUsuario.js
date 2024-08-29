import React, { useState, useEffect, useRef } from 'react';
import '../View/DropDownUsuario.css';
import axios from 'axios';



export default function DropDownUsuario() {

  const [isOpen, setIsOpen] = useState(false);
  const [dropDirection, setDropDirection] = useState('down');
  const dropdownRef = useRef(null);
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


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isOverflowing = rect.bottom > viewportHeight;

      if (isOverflowing) {
        setDropDirection('up');
      } else {
        setDropDirection('down');
      }
    }
  }, [isOpen]);


  
  return (

    <div className={`dropdown ${dropDirection === 'up' ? 'open-up' : ''}`} ref={dropdownRef}>

        {/*Botão Usuário - NavBar*/}
        <button className="navbar-button dropdown-button" onClick={toggleDropdown}>
          Usuário
        </button>


        {/*Enquanto o DropDown estiver aberto*/}
        {isOpen && (
        <div className="dropdown-content">



            {/*Dados do Usuário*/}
            <div className="dropContainer">
            
                <div>
                    <div className="data-container-dropc">Nome</div>
                    <div className="data-container-dropc">Sobrenome</div>
                    <div className="data-container-dropc">Data de Nascimento</div>
                    <div className="data-container-dropc">E-mail</div>
                    <div className="data-container-dropc">Senha</div>
                    <div className="data-container-dropc">CEP</div>
                </div>

                {/*APAGAR ESSE COMENTÁRIO: Steh, essa é a parte que deixei só como teste, pra vc ver o visual.*/}
                {/*APAGAR ESSE COMENTÁRIO:Se tudo der certo, pode substituir essa parte pela de baixo (que busca no banco as infos do usuário*/}
                <div>
                    <div className="user-info-dropc">mariamariamaria</div>
                    <div className="user-info-dropc">maria</div>
                    <div className="user-info-dropc">maria</div>
                    <div className="user-info-dropc">maria</div>
                    <div className="user-info-dropc">maria</div>
                    <div className="user-info-dropc">maria</div>
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


          {/*Botões de Edição e Exclusão*/}
          <button className = "edbutton">Editar</button>
          <button className = "delbutton">Excluir</button>

        </div>
        
      )}
      
    </div>
  );
}
