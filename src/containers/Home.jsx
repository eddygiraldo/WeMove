import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Home.scss';
import liveMap from '../assets/static/live-map.png';

const Home = () => (
  <div className='default-container'>
    <div className='card-container'>
      <h3 className='card-title'>
        WeMove
      </h3>
      <div className='card-content'>
        <h1>
          Obtén la mejor ruta en tiempo real
        </h1>
        <img
          className='card-image'
          src='/'
          alt='BestWave'
        />
      </div>
    </div>

    <div className='card-container'>
      <h3 className='card-title'>
        WeMove
      </h3>
      <div className='card-content'>
        <img
          className='card-image'
          src={liveMap}
          alt='LiveMap'
        />
        <Link to='/livemap'>
          <h1>
            Ve a nuestro mapa en vivo para buscar tu mejor ruta
          </h1>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
