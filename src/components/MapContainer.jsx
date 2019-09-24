import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../assets/styles/components/MapContainer.scss';


const mapStyles = {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    position: 'absolute',
};
  
  export class MapContainer extends Component {
    render() {
      return (
        <Map
          className="layout-map"
          google={this.props.google}
          zoom={19}
          style={mapStyles}
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