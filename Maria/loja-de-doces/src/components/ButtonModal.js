import styles from './Button.module.css';
import handleCompra from './handleCompra';

function ButtonModal({ produtoId, quantidade, onClick }) {
    return (
        <div className={styles.containerModal}>
            <button className={styles.button} onClick={() => handleCompra('', '', quantidade)}>
                Adicionar ao carrinho
            </button>
        </div>
    );
}

export default ButtonModal;
