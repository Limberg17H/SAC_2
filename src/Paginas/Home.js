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
        <div class="col s12 m12 blue">
          <div class="card white darken">
            <div class="card-content black-text">
            <div>
          <h5 class="center-align">iniciar sesion con correo</h5>
            </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">

                    <div class="input-field col s6">
                      <input id="first_name" type="text" class="validate"/>
                      <label for="first_name">Correo</label>
                    </div>
                    

                    <div class="input-field col s6">
                      <input id="last_email" type="text" class="validate" />
                      <label for="last_email">Contraseña</label>
                    </div>

                  </div>

                  <div class="row">
                    <div class="input-field col s6">
                      <input id="first_name" type="text" class="validate" />
                      <label for="first_name">Facebook</label>
                    </div>

                    <div class="input-field col s6">
                      <input id="last_email" type="text" class="validate" />
                      <label for="last_email">Contraseña</label>
                    </div>

                  </div>
                </form>
              </div>
              <h5 class="center-align"><button class="btn waves-effect waves-light" type="submit">Enviar</button></h5>
              <div>
              <h5 class="center-align"><button class="btn waves-effect waves-light" type="submit">Crear cuenta</button></h5>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home