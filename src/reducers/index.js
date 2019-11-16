const initialState = {
  user: {},
  favorites: [],
  route: {},
  called: false,
  currentRoute: {},
  test: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      const { user } = action.payload;
      const names = user.name.split(',');
      localStorage.setItem('token', user.id);
      return {
        ...state,
        user: {
          name: user.name,
          email: user.email,
          initials: `${names[0].charAt(0)} ${names[1] ? names[1].charAt(0) : ''}`,
        },
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: {},
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    case 'SET_PLACES':
      return {
        ...state,
        test: action.payload,
      };
    case 'CALLED_REQUEST':
      return {
        ...state,
        called: action.payload,
      };
    case 'SERVICE_ROOTES_REQUEST':
      return {
        ...state,
        currentRoute: action.payload,
      };
    case 'ROUTE_REQUEST':
      const exist = state.favorites.find((fav) => (action.payload.origin.includes(fav.origin) &&
        action.payload.destination.includes(fav.destination)));

      let element = {};
      if (exist) {
        element = {
          ...exist,
          count: exist.count + 1,
        };
      } else {
        const originPlace = action.payload.origin.split(',');
        const destinationPlace = action.payload.destination.split(',');
        element = {
          id: state.favorites.length + 1,
          origin: action.payload.origin,
          originPlace: originPlace[0],
          originLocation: `${originPlace[1]}, ${originPlace[2]}`,
          destination: action.payload.destination,
          destinationPlace: destinationPlace[0],
          destinationLocation: `${destinationPlace[1]}, ${destinationPlace[2]}`,
          count: 0,
        };
      }

      const index = state.favorites.indexOf(exist);

      if (index > -1) {
        state.favorites.splice(index, 1);
      }

      return {
        ...state,
        route: action.payload,
        favorites: [...state.favorites, element],
      };
    default:
      return state;
  }
};

export default reducer;
