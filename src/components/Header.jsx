import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/static/logo-white.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <div className='header'>
      <div className='header-nav'>
        <Link to='/'>
          <img
            src={LogoWhite}
            className='header-logo'
            alt='WeMove Logo'
          />
        </Link>
        {
          hasUser ?
            (
              <Link
                to='/profile'
                className='header-logged-user'
              >
                {user.initials}
              </Link>
            ) :
            (
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            )
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
