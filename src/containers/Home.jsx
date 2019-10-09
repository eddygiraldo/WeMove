import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MapContainer from '../components/MapContainer'
import '../assets/styles/App.scss';

const Home = () => (
  <div className="App">
    <Header />
    <div className="Main">
      <Sidebar />
      <MapContainer/>
    </div>
  </div>
);

export default Home;