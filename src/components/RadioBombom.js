import React, { Component } from 'react';
import styles from '../View/RadioBombom.module.css';

class RadioBombom extends Component {
  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const { name } = this.props;
    
    return (
      <div className={styles.radioContainer}>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input type="radio" name={name} value="branco" onChange={this.handleChange} />
            Chocolate Branco
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name={name} value="ao Leite" onChange={this.handleChange} />
            Chocolate ao Leite
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name={name} value="meio-amargo" onChange={this.handleChange} />
            Chocolate Meio Amargo
          </label>
        </div>
      </div>
    );
  }
}

export default RadioBombom;