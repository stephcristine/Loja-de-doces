// REACT
import React, { useState, useEffect } from 'react';
import styles from "./View/PaginaDoces.module.css"
import axios from 'axios';

// COMPONENTES
import Navbar from './Navbar';
import Title from './components/Title';
import DoceBombomImg from './components/DoceBombomImg';
import ButtonDoceBombom from './components/ButtonDoceBombom';
import ModalDoce from './components/ModalDoce';

// IMAGENS
import brigadeiro from './imagens/brigadeiro.webp';
import bicho_de_pe from './imagens/bicho_de_pe.png';
import casadinho from './imagens/casadinho.png';
import bombom_brigadeiro from './imagens/bombom_brigadeiro.png';
import bombom_morango from './imagens/bombom_morango.png';
import bombom_coco from './imagens/bombom_coco.png';

export default function Venda() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produto')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados:', error);
      });
  }, []);

  // CONFIGURAÇÕES DOS MODAIS
  const [isModalDoceOpen, setIsModalDoceOpen] = useState(false);
  const [isModalBombomOpen, setIsModalBombomOpen] = useState(false);

  const openModalDoce = () => setIsModalDoceOpen(true);
  const closeModalDoce = () => setIsModalDoceOpen(false);

  const openModalBombom = () => setIsModalBombomOpen(true);
  const closeModalBombom = () => setIsModalBombomOpen(false);

  const doce1 = produtos.find(produto => produto.id_produto === 10);
  const doce2 = produtos.find(produto => produto.id_produto === 11);
  const doce3 = produtos.find(produto => produto.id_produto === 12);

  const bombom1 = produtos.find(produto => produto.id_produto === 1);
  const bombom2 = produtos.find(produto => produto.id_produto === 4);
  const bombom3 = produtos.find(produto => produto.id_produto === 7);

  return (
    <div>

      {/* ESTRUTURA DA PÁGINA */}
      <Navbar />
      <div className={styles.padding}></div>

      {/* DOCES */}
      <Title name="Doces" />
      <DoceBombomImg 
        doce1={brigadeiro} 
        doce2={bicho_de_pe} 
        doce3={casadinho} 
        name1={doce1 ? doce1.nome_produto : ""} 
        name2={doce2 ? doce2.nome_produto : ""} 
        name3={doce3 ? doce3.nome_produto : ""}
      />
      <ButtonDoceBombom onClick={openModalDoce} />

       {/* MODAL DOCE */}
       <ModalDoce
        isOpen={isModalDoceOpen} 
        onClose={closeModalDoce}
        title="Doces"
        doce1={brigadeiro} 
        doce2={bicho_de_pe} 
        doce3={casadinho} 
        name1={doce1 ? doce1.nome_produto : ""}
        name2={doce2 ? doce2.nome_produto : ""}
        name3={doce3 ? doce3.nome_produto : ""}
        descricao1={doce1 ? doce1.desc_produto : ""}
        descricao2={doce2 ? doce2.desc_produto : ""}
        descricao3={doce3 ? doce3.desc_produto : ""}
        valor1={doce1 ? doce1.preco_produto : ""}
        valor2={doce2 ? doce2.preco_produto : ""}
        valor3={doce3 ? doce3.preco_produto : ""}
      />

      {/* BOMBONS */}
      <Title name="Bombom" />
      <DoceBombomImg 
        doce1 = {bombom_brigadeiro} 
        doce2 = {bombom_morango} 
        doce3 = {bombom_coco} 
        name1={bombom1 ? bombom1.nome_produto : ""} 
        name2={bombom2 ? bombom2.nome_produto : ""} 
        name3={bombom3 ? bombom3.nome_produto : ""}
      />
      <ButtonDoceBombom onClick={openModalBombom} />

      {/* MODAL BOMBOM */}
      <ModalDoce
        isOpen = {isModalBombomOpen} 
        onClose = {closeModalBombom}
        title = "Bombons"
        doce1 = {bombom_brigadeiro} 
        doce2 = {bombom_morango} 
        doce3 = {bombom_coco} 
        name1={bombom1 ? bombom1.nome_produto : ""}
        name2={bombom2 ? bombom2.nome_produto : ""}
        name3={bombom3 ? bombom3.nome_produto : ""}
        descricao1={bombom1 ? bombom1.desc_produto : ""}
        descricao2={bombom2 ? bombom2.desc_produto : ""}
        descricao3={bombom3 ? bombom3.desc_produto : ""}
        valor1={bombom1 ? bombom1.preco_produto : ""}
        valor2={bombom2 ? bombom2.preco_produto : ""}
        valor3={bombom3 ? bombom3.preco_produto : ""}
      />

      {/* ESTRUTURA DA PÁGINA */}
      <div className = {styles.baseboard}></div>
      
    </div>
  );
}
