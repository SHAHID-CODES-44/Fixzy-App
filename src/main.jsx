import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Fixzy-App"> {/* 👈 Add basename */}
    <App />
  </BrowserRouter>
);
