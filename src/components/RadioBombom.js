import React from 'react';
import styles from '../View/RadioBombom.module.css';

function RadioBombom({ onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles.radioContainer}>
            
            
            <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                    <input type="radio" name="bombom" value="branco" onChange={handleChange} />
                    Chocolate Branco
                </label>
                <label className={styles.radioLabel}>
                    <input type="radio" name="bombom" value="ao Leite" onChange={handleChange} />
                    Chocolate ao Leite
                </label>
                <label className={styles.radioLabel}>
                    <input type="radio" name="bombom" value="meio-amargo" onChange={handleChange} />
                    Chocolate Meio Amargo
                </label>
            </div>
        </div>
    );
}

export default RadioBombom;
