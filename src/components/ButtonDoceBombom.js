import React, { Component } from 'react';
import styles from '../View/Button.module.css';

class ButtonDoceBombom extends Component {
  render() {
    return (
      <div className={styles.containerDoceBombom}>
        <button className={styles.button} onClick={this.props.onClick}>
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ButtonDoceBombom;