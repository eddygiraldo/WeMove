import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Login.scss';
import FacebookIcon from '../assets/static/facebook-icon.svg';
import GmailIcon from '../assets/static/gmail-icon.svg';
import LogoWhite from '../assets/static/logo-white.png';

const Register = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest({
      ...form,
      initials: form.email.charAt(0),
    });
    props.history.push('/');
  };

  return (
    <div>

      <Link to='/'>
        <div className='login-logo'>
          <img
            src={LogoWhite}
            alt='Logo'
            className='header-logo'
          />
        </div>
      </Link>

      <div className='login'>
        <div className='login-message'>

          <h2>Bienvenido de nuevo</h2>
          <p>
            Si ya tienes una cuenta, sólo inicia sesión.
          </p>

          <Link to='/login'>
            <div className='btn btn-transparent'>
              Ingresar
            </div>
          </Link>

        </div>
        <div className='login-form'>
          <h2>
            Crea una cuenta gratis
          </h2>
          <h3>
            Registrate usando redes sociales
          </h3>
          <div className='social-media'>
            <span><img src={FacebookIcon} alt='' width='30px' /></span>
            <span><img src={GmailIcon} alt='' width='30px' /></span>
          </div>
          <h3>O usa un correo para el registro</h3>
          <form
            className='signup-form'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              className='input input-generic'
              placeholder='Nombre'
            />

            <input
              type='email'
              className='input input-generic'
              placeholder='Correo'
            />

            <input
              type='password'
              className='input input-generic'
              placeholder='Contraseña'
            />

            <button className='btn btn-submit' type='button'>
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

setDispatchToProps = {

};

export default connect(null, null)(Register);
