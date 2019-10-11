import React from 'react';
import '../assets/styles/components/Login.scss';
import FacebookIcon from '../assets/static/facebook-icon.svg';
import GmailIcon from '../assets/static/gmail-icon.svg';
import LogoBlack from '../assets/static/logo-black.png';

const Login = () => (
  <div>

    <a href="/" className="login-logo">
      <img
        src={LogoBlack}
        alt="Logo"
        className="header-logo"
      />
    </a>

    <div className="login">
      <div className="login-form">
        <h2>
          Ingrese a su cuenta
      </h2>
        <h3>
          Ingresa usando redes sociales
      </h3>
        <div className="social-media">
          <span><img src={FacebookIcon} alt="" width="30px" /></span>
          <span><img src={GmailIcon} alt="" width="30px" /></span>
        </div>
        <h3>O</h3>
        <form action="#" className="signup-form">
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
            Ingresar
        </button>
        </form>
      </div>

      <div className="login-message">
        <h2>¿Nuevo aquí?</h2>
        <p>
          Registrate y descubre gran cantidad de grandes oportunidades.
      </p>

        <a className="btn btn-transparent" href="/register">Registrarse</a>
      </div>
    </div>
    
  </div>
)

export default Login;