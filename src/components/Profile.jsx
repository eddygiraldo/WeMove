import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';

import '../assets/styles/components/Profile.scss';

const Profile = (props) => {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  if (!hasUser) {
    props.history.push('/');
  }

  const hadleClick = () => {
    props.logoutRequest();
    props.history.push('/');
  };

  return (
    <div className='profile'>
      <h1>
        Perfil
      </h1>
      <div
        className='profile-image-user'
      >
        {user.initials}
      </div>
      <p>{user.email}</p>
      <button
        type='button'
        className='btn btn-small btn-green-white'
        onClick={hadleClick}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
