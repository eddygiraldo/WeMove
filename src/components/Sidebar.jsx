import React, { useState } from 'react';
import RouteForm from './RouteForm';
import Favorites from './Favorites';
import SearchIcon from '../assets/static/search-icon.svg';
import Laughing from '../assets/static/laughing-face.svg';
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
        <span>
          X
        </span>
      </div>

      {
        sidebarState.hasVisibleOptions && (
          <div className='sidebar'>
            <div className='sidebar-menu'>
              <div
                onClick={handleRouteOptionClick}
                role='button'
                tabIndex='0'
              >
                <img
                  className='sidebar-icon'
                  src={SearchIcon}
                  alt=''
                />
                ¿A dónde vamos?
              </div>
              <div
                onClick={handleFavoritesOptionClick}
                role='button'
                tabIndex='0'
              >
                <img
                  className='sidebar-icon'
                  src={Laughing}
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
