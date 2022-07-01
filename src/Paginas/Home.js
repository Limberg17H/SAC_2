import React, { useState, useEffect } from "react";

function Home() {
  const variablesInicio = {
    correo: "",
    confrimar: "",
    contraseña: "",
  };

  const [values, setValues] = useState(variablesInicio);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const Enviar = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div class="row">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">iniciar sesion con correo</span>
              <div class="row">
                <form class="col s12">
                  <div class="row">

                    <div class="input-field col s6">
                      <input id="first_name" type="text" class="validate"/>
                      <label for="first_name">Introduce correo</label>
                    </div>
                    

                    <div class="input-field col s6">
                      <input id="last_name" type="text" class="validate" />
                      <label for="last_name">confirmar correo</label>
                    </div>

                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn">
                <i class="material-icons left"></i>crear cuenta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;