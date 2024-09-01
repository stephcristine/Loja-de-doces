import React, { Component } from 'react';
import styles from '../View/DoceImg.module.css';

class DoceBombomImg extends Component {
  render() {
    const { doce1, doce2, doce3, name1, name2, name3 } = this.props;

    return (
      <div className={styles.imgContainer}>
        <img src={doce1} alt={name1} className={styles.img} />
        <img src={doce2} alt={name2} className={styles.img} />
        <img src={doce3} alt={name3} className={styles.img} />
      </div>
    );
  }
}

export default DoceBombomImg;