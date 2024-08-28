import React from 'react';
import styles from './RadioBombom.module.css';

function RadioBombom({ onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles.radioContainer}>
            <h3 className={styles.title}>Chocolate</h3>
            <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                    <input type="radio" name="bombom" value="Chocolate Branco" onChange={handleChange} />
                    Chocolate Branco
                </label>
                <label className={styles.radioLabel}>
                    <input type="radio" name="bombom" value="Chocolate ao Leite" onChange={handleChange} />
                    Chocolate ao Leite
                </label>
                <label className={styles.radioLabel}>
                    <input type="radio" name="bombom" value="Chocolate Meio Amargo" onChange={handleChange} />
                    Chocolate Meio Amargo
                </label>
            </div>
        </div>
    );
}

export default RadioBombom;
