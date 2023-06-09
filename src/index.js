import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import './index.css';
import App from './App';
 // import TodoApp from './Components/TodoApp';
 import CRUD from './Components/Crud';
 import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CRUD />
  </React.StrictMode>
);
reportWebVitals();
 
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root.render(
//   <React.StrictMode>
//     <TodoApp />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

