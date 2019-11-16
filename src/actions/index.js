export const loginData = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const setPlaces = (payload) => ({
  type: 'SET_PLACES',
  payload,
});

export const loginRequest = (payload) => {
  const headers = new Headers();
  console.log(payload);
  headers.append('Authorization', 'Basic ' + btoa(payload.email + ":" + payload.password));
  return (dispatch) => {

    fetch('http://ssr.mrdato.com/auth/sign-in', {
      method: 'POST',
      credentials: 'include',
      headers,
    })
      .then((response) => response.json())
      .then((data) => dispatch(loginData(data)))
      .catch((error) => console.log(error));

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
