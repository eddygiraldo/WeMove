import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Home.scss';
import liveMap from '../assets/static/live-map.png';
import bestWave from '../assets/static/best-wave.png';

const Home = () => (
  <div className='default-container'>
    <div className='card-container'>
      <div className='card-content'>
        <h2>
          Obtén la mejor ruta en tiempo real
        </h2>
        <img
          className='card-image'
          src={bestWave}
          alt='BestWave'
        />
      </div>
    </div>

    <div className='card-container'>
      <div className='card-content'>
        <img
          className='card-image'
          src={liveMap}
          alt='LiveMap'
        />
        <Link to='/livemap'>
          <h2>
            Ve a nuestro mapa en vivo para buscar tu mejor ruta
          </h2>
        </Link>
      </div>
    </div>

    <div className='card-container'>
      <div className='card-content'>
        <Link to='/livemap'>
          <h2>
            Observa tus rutas favoritas
          </h2>
        </Link>
        <img
          className='card-image'
          alt='LiveMap'
        />
      </div>
    </div>

  </div>
);

export default Home;
