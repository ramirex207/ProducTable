import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import productlist from './productAPI'

console.log(productlist)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

