import React,{useEffect} from "react";

import {Link} from 'react-router-dom';

import M from 'materialize-css';

function Menu() {

  const colapsado=()=>{
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }


  useEffect(() => {
   colapsado();
  }, [])
  
  return (   
        <div>
     <nav>      
        <div className="nav-wrapper-center">          
          <Link to="wrapper-blue" class="brand-logo">
            SAC 
          </Link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">  Menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Compra">Compra</Link>
            </li>
            <li>
              <Link to="/Categoria">Categoria</Link>
            </li>
            <li>
              <Link to="/Usuario">Usuario</Link>
            </li>
            
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Compra">Compra</Link>
        </li>
        <li>
              <Link to="/Categoria">Categoria</Link>
            </li>
        <li>
          <Link to="/Usuario">Usuario</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Menu;