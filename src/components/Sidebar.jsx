import React, { useState } from 'react';
import RouteForm from './RouteForm';
import Favorites from './Favorites';
import searchIcon from '../assets/static/search-icon.svg';
import laughingIcon from '../assets/static/laughing-face.svg';
import optionsIcon from '../assets/static/options.svg';
import closeIcon from '../assets/static/close.svg';
import '../assets/styles/components/Sidebar.scss';

const Sidebar = (props) => {

  const [sidebarState, setState] = useState({
    hasVisibleOptions: false,
    hasVisibleRoutes: false,
    hasVisibleFavorites: false,
  });

  const handleOptionsClick = (event) => {
    setState({
      ...sidebarState,
      hasVisibleOptions: !sidebarState.hasVisibleOptions,
      hasVisibleRoutes: true,
    });
  };

  const handleRouteOptionClick = (event) => {
    setState({
      ...sidebarState,
      hasVisibleRoutes: !sidebarState.hasVisibleRoutes,
      hasVisibleFavorites: false,
    });
  };

  const handleFavoritesOptionClick = (event) => {
    setState({
      ...sidebarState,
      hasVisibleRoutes: false,
      hasVisibleFavorites: !sidebarState.hasVisibleFavorites,
    });
  };

  return (
    <>
      <div
        className='btn-options'
        role='button'
        tabIndex={0}
        onClick={handleOptionsClick}
      >
        <img
          className='sidebar-icon'
          src={!sidebarState.hasVisibleOptions ? optionsIcon : closeIcon}
          alt=''
          width='25px'
        />
      </div>

      {
        sidebarState.hasVisibleOptions && (
          <div className='sidebar'>
            <div className='sidebar-menu'>
              <div
                onClick={handleRouteOptionClick}
                role='button'
                tabIndex='0'
                className='sidebar-option'
              >
                <img
                  className='sidebar-icon'
                  src={searchIcon}
                  alt=''
                />
                ¿A dónde vamos?
              </div>
              <div
                onClick={handleFavoritesOptionClick}
                role='button'
                tabIndex='0'
                className='sidebar-option'
              >
                <img
                  className='sidebar-icon'
                  src={laughingIcon}
                  alt=''
                />
                Lugares Favoritos
              </div>
            </div>
            {
              sidebarState.hasVisibleRoutes && (
                <RouteForm />
              )
            }
            {
              sidebarState.hasVisibleFavorites && (
                <Favorites />
              )
            }
          </div>
        )
      }

    </>
  );
};

export default Sidebar;
