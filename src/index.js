import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('Rendering the application within BrowserRouter');

root.render(<Main />);