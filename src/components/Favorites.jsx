import React from 'react';
import { connect } from 'react-redux';
import { routeRequest, calledRequest } from '../actions';

import routeIcon from '../assets/static/route-icon.svg';
import '../assets/styles/components/Favorites.scss';

const Favorites = (props) => {
  const { favorites } = props;

  const handleFavoriteClick = (origin, destination) => {
    const data = {
      origin,
      destination,
    };
    props.routeRequest(data);
    props.calledRequest(false);
  };

  return (
    <div className='favorites-container'>
      {favorites.sort((a, b) => b.count - a.count).map((favorite) => (
        <div className='favorite-route' key={favorite.id}>
          <span className='favorite-icon-route'>
            <img src={routeIcon} alt='Icon' />
          </span>
          <div>
            <div className='favorite-place'>
              <span>{favorite.origin}</span>
              <span>{favorite.originLocation}</span>
            </div>

            <div className='favorite-place'>
              <span>{favorite.destination}</span>
              <span>{favorite.destinationLocation}</span>
            </div>
          </div>

          <div
            onClick={() => handleFavoriteClick(favorite.origin, favorite.destination)}
            role='button'
            tabIndex='0'
            data-id={favorite.id}
          >
            Ir
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = {
  routeRequest,
  calledRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
