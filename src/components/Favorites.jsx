import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routeRequest, calledRequest } from '../actions';

import starIcon from '../assets/static/star.svg';
import '../assets/styles/components/Favorites.scss';

const Favorites = (props) => {
  const { favorites, user } = props;
  const hasFavorites = Object.keys(favorites).length > 0;
  const hasUser = Object.keys(user).length > 0;

  const handleFavoriteClick = (origin, destination) => {
    const data = {
      origin,
      destination,
    };
    props.routeRequest(data);
    props.calledRequest(false);
  };

  return (
    <>
      {
        hasUser ? (
          <div className='favorites-container'>
            {
              hasFavorites ? (
                <>
                  {favorites.sort((a, b) => b.count - a.count).map((favorite) => (
                    <>
                      <div className='favorite-route' key={favorite.id}>
                        <div>
                          <div className='favorite-place'>
                            <span>{favorite.originPlace}</span>
                            <br />
                            <span className='favorite-place-location'>
                              {favorite.originLocation}
                            </span>
                          </div>

                          <div className='favorite-place'>
                            <span>{favorite.destinationPlace}</span>
                            <br />
                            <span className='favorite-place-location'>
                              {favorite.destinationLocation}
                            </span>
                          </div>
                        </div>

                        <div
                          onClick={() => handleFavoriteClick(favorite.origin, favorite.destination)}
                          role='button'
                          tabIndex='0'
                          data-id={favorite.id}
                          className='btn btn-smaller btn-green-white'
                        >
                          Ir
                        </div>

                        <div className='favorite-icon-route'>
                          <img src={starIcon} alt='Star' />
                          <span>{favorite.count + 1}</span>
                        </div>

                      </div>
                      <div className='separator' />
                    </>
                  ))}
                </>
              ) :
                (
                  <div>
                    <p>Aún no tienes lugares favoritos</p>
                  </div>
                )
            }
          </div>
        ) :
          (
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
    favorites: state.favorites,
    user: state.user,
  };
};

const mapDispatchToProps = {
  routeRequest,
  calledRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
