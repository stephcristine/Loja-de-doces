import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('Rendering the application within BrowserRouter');

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
