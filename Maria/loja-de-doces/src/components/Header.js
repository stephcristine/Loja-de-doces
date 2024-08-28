import styles from './PaginaDoces.module.css'
import logo from '../images/logo.png'
import ButtonUsuario from './ButtonUsuario'

function Header() {
    return (
        <header className={styles.header}> 
            <img src={logo} alt="Logo" className={styles.logo} /> 
            <div className={styles.titleContainer}>
                <h1 className={styles.h1}>Loja de Doces</h1>
            </div>
            <ButtonUsuario/>
        </header>
    );
}

export default Header;


  
           
           
    