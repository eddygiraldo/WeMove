import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  TrafficLayer,
  Marker,
} from 'react-google-maps';
import { calledRequest, respondRoutesRequest } from '../actions';

const MapGoogle = (props) => {
  const { route, called } = props;

  const [mapState, setMapState] = useState({
    defaultCenter: new google.maps.LatLng(4.6560663, -74.0595918),
    addNew: false,
    newPosition: {},
  });

  const handleMapClick = (event) => {
    setMapState({
      ...mapState,
      addNew: true,
      newPosition: {
        lat: event.pa.x,
        lng: event.pa.y,
      },
    });
    console.log(mapState);
  };

  const setGlobalState = () => {
    props.calledRequest(true);
    props.respondRoutesRequest(mapState.data);
  };

  const DirectionsService = new google.maps.DirectionsService();

  if (route.origin && route.destination && !called) {
    DirectionsService.route({
      origin: route.origin,
      destination: route.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setMapState({
          ...mapState,
          data: result,
        });

        setGlobalState();

      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  const GoogleMapWeMove = withGoogleMap(() => (
    <GoogleMap
      defaultCenter={mapState.defaultCenter}
      defaultZoom={14}
      onClick={handleMapClick}
      options={{
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
      }}
      
    >
      {mapState.data && called && <DirectionsRenderer directions={mapState.data} />}
      <TrafficLayer autoUpdate />
      {mapState.addNew && (
        <Marker
          position={mapState.newPosition}
        />
      )}
    </GoogleMap>
  ));

  return (
    <GoogleMapWeMove
      containerElement={
        (
          <div style={
            {
              height: '100hv',
              width: '100wv',
            }
          }
          />
        )
      }
      mapElement={
        (
          <div style={
            {
              height: '91%',
              width: '100%',
              position: 'absolute',
            }
          }
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    route: state.route,
    called: state.called,
  };
};

const mapDispatchToProps = {
  calledRequest,
  respondRoutesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapGoogle);
