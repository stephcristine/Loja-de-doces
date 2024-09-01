import React, { Component } from 'react';
import styles from '../View/Counter.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return { count: prevState.count - 1 };
      }
      return null;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.props.onCountChange(this.state.count);
    }
  }

  render() {
    return (
      <div className={styles.counterContainer}>
        <button className={styles.counterButton} onClick={this.decrement}>-</button>
        <span className={styles.counterDisplay}>{this.state.count}</span>
        <button className={styles.counterButton} onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;