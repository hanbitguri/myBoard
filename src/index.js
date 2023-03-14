import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/styles/base/_fonts.scss'
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
// 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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
