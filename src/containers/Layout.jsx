import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => (
  <div className='app'>
    <Header />
    { children }
  </div>
);

export default Layout;
