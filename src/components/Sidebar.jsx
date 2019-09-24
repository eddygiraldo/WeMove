import React from 'react';
import '../assets/styles/components/sidebar.scss';
import SearchIcon from '../assets/static/search-icon.svg';
import Laughing from '../assets/static/laughing-face.svg';



const Sidebar = () => (
  <div className="layout-container">
      <div className="sidebar">
          <div className="sidebar-menu">
              <a href=""><img src={SearchIcon} alt=""/>¿A dónde vamos?</a>
              <a href=""><img src={Laughing} alt=""/>Lugares Favoritos</a>
          </div>
      </div>
  </div>
);

export default Sidebar;