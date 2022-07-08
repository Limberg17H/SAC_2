import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



import Layout from '../Componentes/Layouts/Layout';
import Home from '../Paginas/Home';
import Usuario from"../Paginas/Usuario";
import Compra from '../Paginas/Compra';


function Rutas() {
  return (
      <div>
         <Router>
             <Layout>
                 <Routes>
                     <Route exact path="/Home" element = {<Home/>}/>
                     
                     <Route exact path="/Usuario" element={<Usuario/>}/>
                     <Route path="/Compra" element={<Compra/>}/>
                 </Routes>
             </Layout>
         </Router>
      </div>
  )
}
 
export default Rutas