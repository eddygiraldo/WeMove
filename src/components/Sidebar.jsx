import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Sidebar.scss';
import SearchIcon from '../assets/static/search-icon.svg';
import Laughing from '../assets/static/laughing-face.svg';

const Sidebar = () => (
  <>
    {/* <div className='btn-options'>
      <div className='btn btn-generic'>
        <span>
          Options
        </span>
      </div>
    </div> */}

    <div className='sidebar'>
      <div className='sidebar-menu'>
        <Link to='/'>
          <img src={SearchIcon} alt='' />
          ¿A dónde vamos?
        </Link>
        <Link to='/'>
          <img src={Laughing} alt='' />
          Lugares Favoritos
        </Link>
      </div>
      <div className='sidebar-container'>
        <input
          type='text'
          name='origin'
          className='input input-small'
          placeholder='Origen'
        />

        <input
          type='text'
          name='detination'
          className='input input-small'
          placeholder='Destino'
        />

        <div className='btn btn-small'>
          Ir
        </div>
      </div>
    </div>
  </>
);

export default Sidebar;
