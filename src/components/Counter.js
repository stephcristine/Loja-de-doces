import React, { useState, useEffect } from 'react';
import styles from '../View/Counter.module.css';

function Counter({ onCountChange }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    onCountChange(count);
  }, [count, onCountChange]);

  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterButton} onClick={decrement}>-</button>
      <span className={styles.counterDisplay}>{count}</span>
      <button className={styles.counterButton} onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
