import React, { useState, useEffect } from "react";

function Formulario() {
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
        <div class="card">
          <h5 class="card-header">Inciar Sesion Con</h5>
          <div class="card-body">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input id="last_email" type="text" class="validate" />
                  <label for="last_email">Correo</label>
                </div>

                <div class="input-field col s6">
                  <input id="last_password" type="text" class="validate" />
                  <label for="last_password">Contraseña</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s6">
                  <input id="first_name" type="text" class="validate" />
                  <label for="first_name">Facebook</label>
                </div>

                <div class="input-field col s6">
                  <input id="last_password" type="text" class="validate" />
                  <label for="last_password">Contraseña</label>
                </div>
              </div>
              <br/>
              <h5 class="center-align">
                <button class="btn btn-primary" type="submit">
                  Enviar
                </button>
              </h5>
              <div>
                <h5 class="center-align">
                  <button class="btn btn-primary" type="submit">
                    Crear cuenta
                  </button>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
