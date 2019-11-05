import React from 'react';
import { connect } from 'react-redux';
import { routeRequest, calledRequest } from '../actions';

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
    <div className='sidebar-container'>
      {favorites.sort((a, b) => b.count - a.count).map((favorite) => (
        <div key={favorite.id}>
          {`${favorite.origin} - ${favorite.destination}`}
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
