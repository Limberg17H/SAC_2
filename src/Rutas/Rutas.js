import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



import Layout from '../Componentes/Layouts/Layout';
import Formulario from '../Paginas/Formulario';
import Usuario from"../Paginas/Usuario";
import Compra from '../Paginas/Compra';
import Home from '../Paginas/Home';

function Rutas() {
  return (
      <div>
         <Router>
             <Layout/>
                 <Routes>
                     <Route exact path="/Formulario" element = {<Formulario/>}/>
                     <Route exact path="/Usuario" element={<Usuario/>}/>
                     <Route path="/Compra" element={<Compra/>}/>
                     <Route path="/Home" element={<Home/>}/>
                 </Routes>
             
         </Router>
      </div>
  )
}
 
export default Rutas