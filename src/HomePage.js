import homeimg from './imagens/homeimg.png';
import { Link } from 'react-router-dom';
import './View/App.css';

export default function HomePage() {
  return (
    <div className="content">
      <img src={homeimg} alt="Confeitaria" className="content-photo" />
      <div className="text-and-button">
        <div className="content-text">
          <h1 className="content-title">
            Descubra o Mundo dos Doces como Nunca Antes!
          </h1>
          <p className="content-subtitle">
            Explore nossa seleção irresistível de doces gourmet e artesanais.
            Qualidade premium, entrega rápida e a doçura que você merece.
            Encontre seu sabor favorito e torne cada momento mais doce com a
            gente!
          </p>
        </div>
        <Link to="/Cadastro" className="content-button">Venda</Link>


        <Link to= "/Venda"  className="content-button"> !!!VENDA!!!</Link>
      </div>
    </div>
  );
}