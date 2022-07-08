import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from "./App"
import "materialize-css" 
import Aplicacion from './Aplicacion';
import reportWebVitals from './reportWebVitals';
import "materialize-css/dist/css/materialize.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aplicacion />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </React.StrictMode>
);

reportWebVitals()
