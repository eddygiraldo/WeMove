import React from 'react';
import '../assets/styles/components/Login.scss';
import FacebookIcon from '../assets/static/facebook-icon.svg';
import GmailIcon from '../assets/static/gmail-icon.svg';

const Register = () => (
  <div className="login">
    <div className="login-message">
      <a href="/" className="login-logo"><img src="" alt="" />Volver</a>

      <h2>Bienvenido de nuevo</h2>
      <p>
        Si ya tienes una cuenta, sólo inicia sesión.
      </p>

      <a href="/login" className="btn btn-transparent">Ingresar</a>
    </div>
    <div className="login-form">
      <h2>
        Crea una cuenta gratis
      </h2>
      <h3>
        Registrate usando redes sociales
      </h3>
      <div className="social-media">
        <span><img src={FacebookIcon} alt="" width="30px" /></span>
        <span><img src={GmailIcon} alt="" width="30px" /></span>
      </div>
      <h3>O usa un correo para el registro</h3>
      <form action="#" className="signup-form">
        <input
          type="text"
          className="input-generic"
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

export default Register;