import React, { useState } from 'react';
import RouteForm from './RouteForm';
import Favorites from './Favorites';
import searchIcon from '../assets/static/search-icon.svg';
import laughingIcon from '../assets/static/laughing-face.svg';
import '../assets/styles/components/Sidebar.scss';

const Sidebar = (props) => {

  const [sidebarState, setState] = useState({
    hasVisibleRoutes: false,
    hasVisibleFavorites: false,
  });

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
      <div className='sidebar'>
        <div className='sidebar-menu'>
          <div
            onClick={handleRouteOptionClick}
            role='button'
            tabIndex='0'
            className={'sidebar-option ' + (sidebarState.hasVisibleRoutes ? 'selected' : '')}
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
            tabIndex='-1'
            className='sidebar-option'
            className={'sidebar-option ' + (sidebarState.hasVisibleFavorites ? 'selected' : '')}
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
          (sidebarState.hasVisibleRoutes || sidebarState.hasVisibleFavorites) && (
            <div className='sidebar-container'>
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
      </div>
    </>
  );
};

export default Sidebar;
