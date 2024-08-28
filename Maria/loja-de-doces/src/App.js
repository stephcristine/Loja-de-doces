// REACT
import React, { useState } from 'react';

// COMPONENTES
import Header from './components/Header';
import Title from './components/Title';
import Padding from './components/Padding';
import DoceBombomImg from './components/DoceBombomImg';
import ButtonDoceBombom from './components/ButtonDoceBombom';
import BaseBoard from './components/BaseBoard';
import ModalDoce from './components/ModalDoce';

// IMAGENS
import brigadeiro from './images/brigadeiro.webp';
import bicho_de_pe from './images/bicho_de_pe.png';
import casadinho from './images/casadinho.png';
import bombom_brigadeiro from './images/bombom_brigadeiro.png';
import bombom_morango from './images/bombom_morango.png';
import bombom_coco from './images/bombom_coco.png';

function App() {

  // CONFIGURAÇÕES DOS MODAIS
  const [isModalDoceOpen, setIsModalDoceOpen] = useState(false);
  const [isModalBombomOpen, setIsModalBombomOpen] = useState(false);

  const openModalDoce = () => setIsModalDoceOpen(true);
  const closeModalDoce = () => setIsModalDoceOpen(false);

  const openModalBombom = () => setIsModalBombomOpen(true);
  const closeModalBombom = () => setIsModalBombomOpen(false);

  return (
    <div>

      {/* ESTRUTURA DA PÁGINA */}
      <Header />
      <Padding />

      {/* DOCES */}
      <Title name="Doces" />
      <DoceBombomImg 
        doce1={brigadeiro} 
        doce2={bicho_de_pe} 
        doce3={casadinho} 
        name1="Brigadeiro" 
        name2="Bicho de Pé" 
        name3="Casadinho"
      />
      <ButtonDoceBombom onClick={openModalDoce} />

       {/* MODAL DOCE */}
       <ModalDoce
        isOpen={isModalDoceOpen} 
        onClose={closeModalDoce}
        title = "Doces"
        doce1={brigadeiro} 
        doce2={bicho_de_pe} 
        doce3={casadinho} 
        name1="Brigadeiro" 
        name2="Bicho de Pé" 
        name3="Casadinho"
        descricao1 = "Deliciosa combinação de leite condensado e chocolate, coberto com granulados crocantes."
        descricao2 = "Um doce rosado, feito de morango, perfeito para os apaixonados por sabores delicados."
        descricao3 = "Um encontro irresistível entre o beijinho e o brigadeiro, formando uma dupla perfeita."
        valor1 = {3}
        valor2 = {3}
        valor3 = {3}
      />


      {/* BOMBONS */}
      <Title name="Bombom" />
      <DoceBombomImg 
        doce1 = {bombom_brigadeiro} 
        doce2 = {bombom_morango} 
        doce3 = {bombom_coco} 
        name1 = "Bombom de Brigadeiro" 
        name2 = "Bombom de Morango" 
        name3 = "Bombom de Coco"
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
        name1 = "Bombom de Brigadeiro" 
        name2 = "Bombom de Morango" 
        name3 = "Bombom de Coco"
        descricao1 = "Bombom recheado com um irresistível creme de chocolate, coberto com uma camada crocante."
        descricao2 = "Um bombom recheado com morango suculento e envolto em uma camada de chocolate fino."
        descricao3 = "Delicado bombom recheado com coco ralado e coberto por uma deliciosa camada de chocolate."
        valor1 = {7}
        valor2 = {7}
        valor3 = {7}
      />


      {/* ESTRUTURA DA PÁGINA */}
      <BaseBoard />
      

    </div>
  );
}

export default App;
