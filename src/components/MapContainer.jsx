import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../assets/styles/components/MapContainer.scss';

export class MapContainer extends Component {
  render() {
    const { google } = this.props;

    return (
      <Map
        className='layout-map'
        google={google}
        zoom={19}
        initialCenter={{
          lat: 4.6560663,
          lng: -74.0595918,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVQJCy4pG2Fpz-Ij98tdmKejfiwAMQqpg',
})(MapContainer);
