import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routeRequest, calledRequest } from '../actions';
import '../assets/styles/components/Sidebar.scss';

const RouteForm = (props) => {

  const { currentRoute, route, user } = props;
  const hasUser = Object.keys(user).length > 0;

  const [routeState, setState] = useState({
    origin: '',
    destination: '',
  });

  const handleInput = (event) => {
    setState({
      ...routeState,
      [event.target.name]: event.target.value,
    });
  };

  const handleRouteClick = (event) => {
    const origin = document.getElementById('origin');
    const destination = document.getElementById('destination');
    const data = {
      origin: origin.value,
      destination: destination.value,
    };
    props.routeRequest(data);
    props.calledRequest(false);
  };

  const defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-33.8902, 151.1759),
    new google.maps.LatLng(-33.8474, 151.2631),
  );

  // Declare Options For Autocomplete
  const options = {
    bounds: defaultBounds,
    componentRestrictions: {
      country: 'CO',
    },
  };

  const autocompleteOrigin = new google.maps.places.Autocomplete(
    document.getElementById('origin'),
    options,
  );

  const autocompleteDestination = new google.maps.places.Autocomplete(
    document.getElementById('destination'),
    options,
  );

  autocompleteOrigin.setFields(['address_components', 'formatted_address']);
  autocompleteDestination.setFields(['address_components', 'formatted_address']);

  return (
    <>
      {
        hasUser ? (
          <>
            <input
              type='text'
              name='origin'
              id='origin'
              className='input input-small'
              placeholder='Origen'
              onChange={handleInput}
              defaultValue={route ? route.origin : ''}
            />

            <input
              type='text'
              name='destination'
              id='destination'
              className='input input-small'
              placeholder='Destino'
              onChange={handleInput}
              defaultValue={route ? route.destination : ''}
            />

            {currentRoute && currentRoute.routes && (
              <p>
                {`${currentRoute.routes[0].legs[0].duration.text} (${currentRoute.routes[0].legs[0].distance.text})`}
              </p>
            )}

            <div
              className='btn btn-small btn-green-white'
              onClick={handleRouteClick}
              role='button'
              tabIndex='0'
            >
              Buscar ruta
            </div>
          </>
        ) : (
          <Link
            to='/login'
            className='btn btn-small btn-green-white'
          >
              Iniciar sesión
          </Link>
        )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentRoute: state.currentRoute,
    route: state.route,
    user: state.user,
  };
};

const mapDispatchToProps = {
  routeRequest,
  calledRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);

