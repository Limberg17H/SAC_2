import React, { useEffect } from "react";

import { Link } from "react-router-dom";


import "material-icons";

function Menu() {

  return (
    <div>
      <nav>
      
      <ul class="nav nav-tabs justify-content-end">
      
    <a class="navbar-brand content-center" href="#">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      SAC
    </a>
    
        <li class="nav-item">
          <Link to="/Home" class="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Categoria
          </a>
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <Link class="dropdown-item" to="#">
                Separated link
              </Link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Formulario">
            Registrarse
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Compra">Compra</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Usuario">Usuario</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
}

export default Menu;
