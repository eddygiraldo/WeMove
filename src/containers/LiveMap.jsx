import React from 'react';
import Sidebar from '../components/Sidebar';
import MapGoogle from '../components/MapContainer';
import '../assets/styles/App.scss';

const LiveMap = () => (
  <div className='main'>
    <Sidebar />
    <MapGoogle />
  </div>
);

export default LiveMap;
