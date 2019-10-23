import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Sidebar.scss';
import SearchIcon from '../assets/static/search-icon.svg';
import Laughing from '../assets/static/laughing-face.svg';

const Sidebar = (props) => {
  const [sidebarState, setState] = useState({
    hasVisibleOptions: false,
  });

  const handleOptionsClick = (event) => {
    setState({
      ...sidebarState,
      hasVisibleOptions: !sidebarState.hasVisibleOptions,
    });
    console.log(sidebarState);
  };

  return (
    <>
      <div
        className='btn-options'
        role='button'
        tabIndex={0}
        onClick={handleOptionsClick}
      >
        <span>
          X
        </span>
      </div>

      {
        sidebarState.hasVisibleOptions && (
          <div className='sidebar'>
            <div className='sidebar-menu'>
              <Link to='/'>
                <img className='sidebar-icon' src={SearchIcon} alt='' />
                ¿A dónde vamos?
              </Link>
              <Link to='/'>
                <img className='sidebar-icon' src={Laughing} alt='' />
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
        )
      }

    </>
  );
};

export default Sidebar;
