import React from 'react';
import '../assets/styles/App.scss';

const HelloWorld = () => (
  <div class="login">
    <div class="login-message">
      <img src="" clas="login-logo" alt=""/>
      <h2>Bienvenido de nuevo</h2>
      <p>
        Si ya tienes una cuenta, sólo inicia sesión.
      </p>

      <button class="btn btn-transparent">
        Ingresar
      </button>
    </div>
    <div class="login-form">
      <h2>
        Crea una cuenta gratis
      </h2>
      <h3>
        Registrate usando redes sociales
      </h3>
      <div class="social-media">
        <span>Facebook</span>
        <span>Twitter</span>
      </div>
      <h3>O usa un correo para el registro</h3>
      <form action="#" class="signup-form">
        <input 
          type="text"
          class="input-generic"
          placeholder="Nombre"
        />

        <input 
          type="email"
          class="input-generic"
          placeholder="Correo"
        />

        <input
          type="password"
          class="input-generic"
          placeholder="Contraseña"
        />

        <button class="btn btn-submit">
          Registrarse
        </button>
      </form>
    </div>
  </div>
)


export default HelloWorld;