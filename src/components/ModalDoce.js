import React, { useState } from 'react';
import styles from '../View/Modal.module.css';
import Counter from './Counter';
import ButtonModal from './ButtonModal';
import RadioBombom from './RadioBombom';
import handleCompra from './handleCompra'; // Importe a função handleCompra

function ModalDoce({ isOpen, onClose, title, doce1, doce2, doce3, name1, name2, name3, descricao1, descricao2, descricao3, valor1, valor2, valor3 }) {
    const [quantities, setQuantities] = useState([0, 0, 0]); // Array to store quantities for each item
    const [selectedChocolate, setSelectedChocolate] = useState('');

    const handleCounterChange = (index, count) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = count;
            return newQuantities;
        });
    };

    const handleButtonModalClick = () => {
        quantities.forEach((quantity, index) => {
            if (quantity > 0) {
                const productName = [name1, name2, name3][index];
                const chocolateFlavor = title === "Bombons" ? selectedChocolate : '';

                handleCompra(productName, chocolateFlavor, quantity); // Chama a função handleCompra
            }
        });
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}> x
                    
                </button>

                {/* CABEÇALHO COM TÍTULOS */}
                <div className={styles.header}>
                    <div className={styles.headerContainer}>
                        <h2 className={styles.title}>{name1}</h2>
                        <h2 className={styles.title}>{name2}</h2>
                        <h2 className={styles.title}>{name3}</h2>
                    </div>
                </div>

                {/* FOTOS */}
                <div className={styles.container}>
                    <img src={doce1} alt={name1} className={styles.img} />
                    <img src={doce2} alt={name2} className={styles.img} />
                    <img src={doce3} alt={name3} className={styles.img} />
                </div>

                {/* DESCRIÇÕES */}
                <div className={styles.container}>
                    <div className={styles.descContainer}>{descricao1}</div>
                    <div className={styles.descContainer}>{descricao2}</div>
                    <div className={styles.descContainer}>{descricao3}</div>
                </div>

                {/* VALORES */}
                <div className={styles.container}>
                    <div className={styles.descContainer}>R$ {valor1},00</div>
                    <div className={styles.descContainer}>R$ {valor2},00</div>
                    <div className={styles.descContainer}>R$ {valor3},00</div>
                </div>

                {/* COUNTERS */}
                <div className={styles.container}>
                    <div className={styles.counterContainer}>
                        <Counter onCountChange={(count) => handleCounterChange(0, count)} />
                    </div>
                    <div className={styles.counterContainer}>
                        <Counter onCountChange={(count) => handleCounterChange(1, count)} />
                    </div>
                    <div className={styles.counterContainer}>
                        <Counter onCountChange={(count) => handleCounterChange(2, count)} />
                    </div>
                </div>

                {/* OPÇÕES DE CHOCOLATE (PARA OS BOMBONS)*/}
                {title === "Bombons" && (
                <div className={styles.container}>
                    <div className={styles.counterContainer}>
                        <RadioBombom onChange={(value) => setSelectedChocolate(value)} />
                    </div>
                    <div className={styles.counterContainer}>
                        <RadioBombom onChange={(value) => setSelectedChocolate(value)} />
                    </div>
                    <div className={styles.counterContainer}>
                        <RadioBombom onChange={(value) => setSelectedChocolate(value)} />
                    </div>
                    
                </div>
                )}

                <ButtonModal onClick={handleButtonModalClick} />
            </div>
        </div>
    );
}

export default ModalDoce;
