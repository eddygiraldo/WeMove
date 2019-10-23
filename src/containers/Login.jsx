import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import FacebookIcon from '../assets/static/facebook-icon.svg';
import GmailIcon from '../assets/static/gmail-icon.svg';
import LogoBlack from '../assets/static/logo-black.png';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <div>
      <Link to='/'>
        <div className='login-logo'>
          <img
            src={LogoBlack}
            alt='Logo'
            className='header-logo'
          />
        </div>
      </Link>

      <div className='login'>
        <div className='login-form'>
          <h2>
            Ingrese a su cuenta
          </h2>
          <h3>
            Ingresa usando redes sociales
          </h3>
          <div className='social-media'>
            <span><img src={FacebookIcon} alt='' width='30px' /></span>
            <span><img src={GmailIcon} alt='' width='30px' /></span>
          </div>
          <h3>Ó</h3>
          <form className='signup-form' onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              className='input input-generic'
              placeholder='Correo'
              onChange={handleInput}
            />

            <input
              type='password'
              name='password'
              className='input input-generic'
              placeholder='Contraseña'
            />

            <button type='submit' className='btn btn-submit'>
              Ingresar
            </button>
          </form>
        </div>

        <div className='login-message'>
          <h2>¿Nuevo aquí?</h2>
          <p>
            Registrate y descubre gran cantidad de grandes oportunidades.
          </p>

          <Link to='/register'>
            <div className='btn btn-transparent'>
              Registrarse
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
};

const mapDispacthToProps = {
  loginRequest,
};

export default connect(null, mapDispacthToProps)(Login);
