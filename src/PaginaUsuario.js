import React, { useState, useEffect } from 'react';
import './View/PaginaUsuario.css';
import TabelaCompra from './components/TabelaCompra';
import TabelaHistorico from './components/TabelaHistorico';
import ModalCarrinho from './components/ModalCarrinho';
import Navbar from './Navbar';
import CompraService from './services/CompraService';

export default function PaginaUsuario() {
    const [compra, setCompra] = useState([]);
    const [compraFinalizado, setCompraFinalizado] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const compras = await CompraService.buscarCompra();
                setCompra(compras);
                console.log("DADOS RECEBIDOS:", compras);
            } catch (error) {
                console.error('Erro ao buscar as compras:', error);
            }
        };
    
        const fetchComprasFinalizadas = async (id_usuario) => {
            if (!id_usuario) return;
            try {
                const response = await CompraService.buscarCompraFinalizada(id_usuario);
                console.log('Compras Finalizadas:', response);
                setCompraFinalizado(response);
            } catch (error) {
                console.error('Erro ao buscar compras finalizadas:', error);
            }
        };

        fetchCompras();
        const id_usuario = localStorage.getItem('id_usuario');
        fetchComprasFinalizadas(id_usuario);
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <Navbar/>
            <div className="userContainer">
                <h2 className="title">Carrinho de Compras</h2>
                <TabelaCompra items={compra} />
                <div className="finalizar-container">
                    <button onClick={handleOpenModal}>Finalizar Compra</button>
                </div>

                {isModalOpen && (
                    <ModalCarrinho isOpen={isModalOpen} onClose={handleCloseModal} itens={compra}/>
                )}
            </div>

            <div className="historyContainer">
                <h2 className="historyTitle">Histórico de Compras</h2>
                <TabelaHistorico items={compraFinalizado} />
            </div>
        </div>
    );
}
