import React from 'react';
import styles from '../View/ModalCarrinho.module.css';

function ModalCarrinho({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {/* Botão para fechar o modal */}
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>

                {/* Título do Modal */}
                <div className={styles.title}>Carrinho de Compras</div>

                {/* Conteúdo Principal */}
                <div className={styles.mainContent}>
                    {/* Seções Doces e Bombons */}
                    <div className={styles.tablesSection}>
                        {/* Seção Doces */}
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Doces</h3>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Quant</th>
                                        <th>Item</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/*INSTANCIAS DA TABELA AQUI */}
                                        <td className>3</td>
                                        <td className>brigadeiro</td>
                                        <td>12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Seção Bombons */}
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Bombons</h3>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Quant</th>
                                        <th>Item</th>
                                        <th>Chocolate</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/*INSTANCIAS DA TABELA AQUI */}
                                        <td className>3</td>
                                        <td className>bombom de morango</td>
                                        <td>branco</td>
                                        <td>12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Div com CEP, TOTAL e Botões */}
                    <div className={styles.extraSection}>
                        <div className={styles.cepSection}>
                            <h4 className={styles.cepTitle}>CEP</h4>
                            <div className={styles.cepContainer}>Teste</div>
                        </div>

                        <div className={styles.totalSection}>
                            <h4 className={styles.totalTitle}>TOTAL</h4>
                            <h4 className={styles.totalAmount}>R$</h4>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.editButton}>Editar</button>
                            <button className={styles.deleteButton}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCarrinho;
