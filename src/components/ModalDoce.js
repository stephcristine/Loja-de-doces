import React, { useState, useCallback } from 'react';
import styles from '../View/Modal.module.css';
import'../View/Button.module.css';
import Counter from './Counter';
import RadioBombom from './RadioBombom';
import handleCompra from './handleCompra'; 

function ModalDoce({ isOpen, onClose, title, doce1, doce2, doce3, name1, name2, name3, descricao1, descricao2, descricao3, valor1, valor2, valor3 }) {
    const [quantities, setQuantities] = useState([0, 0, 0]); // Array to store quantities for each item
    const [selectedChocolate, setSelectedChocolate] = useState('');

    const userId = 7;

    const handleCounterChange = useCallback((index, count) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = count;
            return newQuantities;
        });
    }, []);

    const handleButtonModalClick = () => {
        console.log("handleButtonModalClick foi chamado");
        quantities.forEach((quantity, index) => {
            if (quantity > 0) {
                const productName = [name1, name2, name3][index];
                const chocolateFlavor = title === "Bombons" ? selectedChocolate : '';

                const produtoId = getProductId(productName, chocolateFlavor);
                console.log("id produto:", produtoId);

                const values = {
                    qtd_produto: quantity,
                    status_compra: "pendente",
                    id_produto: produtoId, 
                    id_categoria_produto: 0, 
                    id_usuario: userId, 
                    nome_produto: productName,
                    sabor_chocolate: chocolateFlavor
                };
                console.log("ESSE:", selectedChocolate, chocolateFlavor);
                handleCompra(values);
            }
        });
    };

    if (!isOpen) return null;

    const getProductId = (productName, chocolateFlavor) => {
        console.log("getProductIdByChocolateType:", productName, chocolateFlavor);
        if (productName === "Bombom de brigadeiro") {
            if (chocolateFlavor === "branco") return 1; 
            if (chocolateFlavor === "ao leite") return 2;
            if (chocolateFlavor === "meio-amargo") return 3;
        } else if (productName === "Bombom de morango") {
            if (chocolateFlavor === "branco") return 4;
            if (chocolateFlavor === "ao leite") return 5;
            if (chocolateFlavor === "meio-amargo") return 6;
        } else if (productName === "Bombom de coco") {
            if (chocolateFlavor === "branco") return 7;
            if (chocolateFlavor === "ao leite") return 8;
            if (chocolateFlavor === "meio-amargo") return 9;
        }
        else if (productName === "Brigadeiro") return 10;
        else if (productName === "Bicho de pé") return 11;
        else if (productName === "Casadinho") return 12;
        else return null;

        console.log("Produto não encontrado:", productName, chocolateFlavor);
        
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
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

                <div className="containerModal">
                    <button className="button" onClick={handleButtonModalClick}>
                    Adicionar ao carrinho
                     </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDoce;
