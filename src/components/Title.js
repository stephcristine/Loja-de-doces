import React, { Component } from 'react';
import styles from '../View/PaginaDoces.module.css';

class Title extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className={styles.title}>
        <h1 className={styles.h1}>{name}</h1>
      </div>
    );
  }
}

export default Title;