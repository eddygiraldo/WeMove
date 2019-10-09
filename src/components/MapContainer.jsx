import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../assets/styles/components/MapContainer.scss';

  
  export class MapContainer extends Component {
    render() {
      return (
        <Map
          className="layout-map"
          google={this.props.google}
          zoom={19}
          initialCenter={{
          lat: 4.6560663,
          lng: -74.0595918
          }}
        />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDVQJCy4pG2Fpz-Ij98tdmKejfiwAMQqpg'
  })(MapContainer);