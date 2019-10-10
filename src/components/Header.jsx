import React from 'react';
import LogoBlack from '../assets/static/logo-black.png';
import '../assets/styles/components/header.scss';

const Header = () => (
  <div className="header">
    <div className="header-nav">
      <a href="/"><img src={LogoBlack} className="header-logo" alt="WeMove Logo"/></a>
      <a href="/login">Iniciar Sesión</a>
    </div>
  </div>
);

export default Header;