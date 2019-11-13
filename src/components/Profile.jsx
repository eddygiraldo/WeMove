import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Profile.scss';

const Profile = (props) => {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  if (!hasUser) {
    props.history.push('/');
  }

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
