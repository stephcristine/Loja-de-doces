import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View/PaginaUsuario.css';
import TabelaCompra from './components/TabelaCompra';
import TabelaHistorico from './components/TabelaHistorico';
import ModalCarrinho from './components/ModalCarrinho';

export default function PaginaUsuario() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/usuario')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Houve um erro ao buscar os dados:', error);
            });
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="userContainer">
                <h2 className="title">Carrinho de Compras</h2>
                <TabelaCompra items={users} />
                <div className="finalizar-container">
                    <button onClick={handleOpenModal}>Finalizar Compra</button>
                </div>

                {isModalOpen && (
                    <ModalCarrinho isOpen={isModalOpen} onClose={handleCloseModal} />
                )}
            </div>

            <div className="historyContainer">
                <h2 className="historyTitle">Histórico de Compras</h2>
                <TabelaHistorico items={users} />
            </div>
        </div>
    );
}
