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
  };
};

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

export const getPlaces = (payload) => ({
  type: 'GET_PLACES',
  payload,
});
