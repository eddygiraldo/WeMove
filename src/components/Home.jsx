import React from 'react';
import { Link } from 'react-router-dom';
import holidayImage from '../assets/static/holiday.png';
import '../assets/styles/components/Home.scss';

const Home = () => (
  <div className='default-container'>
    <div className='card-container'>
      <div className='card-content'>
        <div className='card-content-description'>
          <h2>
            Fácil, rápido y efectivo.
            <br />
            <b>
              Tú mejor ruta en tiempo real.
            </b>
          </h2>

          <p>
            Ve a nuestro mapa en vivo para buscar tu mejor ruta y
            observa tus rutas favoritas.
          </p>

          <div className='card-content-buttons'>
            <Link
              to='/livemap'
              className='btn btn-small btn-green-white'
            >
              Buscar ruta
            </Link>

            <Link
              to='/login'
              className='btn btn-small btn-white-green'
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
        <img
          className='card-image'
          src={holidayImage}
          alt='BestWave'
        />
      </div>
    </div>
  </div>
);

export default Home;
