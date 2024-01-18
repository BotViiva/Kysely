import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import KyselyAloitusnäkymä from "./Komponentit/KyselyAloitusnäkymä";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KyselyAloitusnäkymä />
  </React.StrictMode>
);