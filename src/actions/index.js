export const loginData = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const setPlaces = (payload) => ({
  type: 'SET_PLACES',
  payload,
});

export const loginRequest = (payload) => {
  return (dispatch) => {
    dispatch(loginData(payload));

    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => dispatch(setPlaces(data)))
      .catch((error) => console.log(error));
  };
};

// {
//   type: 'LOGIN_REQUEST',
//   payload,
// }

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const calledRequest = (payload) => ({
  type: 'CALLED_REQUEST',
  payload,
});

export const respondRoutesRequest = (payload) => ({
  type: 'SERVICE_ROOTES_REQUEST',
  payload,
});

export const routeRequest = (payload) => ({
  type: 'ROUTE_REQUEST',
  payload,
});

