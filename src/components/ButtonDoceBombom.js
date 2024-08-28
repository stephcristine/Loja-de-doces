// ButtonDoceBombom.js
import styles from '../View/Button.module.css';

function ButtonDoceBombom({ onClick }) {

    return (
        <div className={styles.containerDoceBombom}>
            <button className={styles.button} onClick={onClick}>
                Adicionar ao carrinho
            </button>
        </div>
    );
}

export default ButtonDoceBombom;
