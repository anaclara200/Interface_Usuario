import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// aqui voce importa os componentes que voce deseja mostrar
import App from './App';
import Teste from './Teste';
import reportWebVitals from './reportWebVitals';
// aqui chama os componentes na ordem que a gente quer para testar no navegador
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Teste />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
