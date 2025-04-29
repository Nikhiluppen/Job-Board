import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import "../styles.css"; // Ensure correct path

// // Ensure styles are correctly linked
// src/index.js or src/App.jsx



ReactDOM.render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
