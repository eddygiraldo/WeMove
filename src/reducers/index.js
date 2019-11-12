const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: {
          ...action.payload,
        },
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
      const exist = state.favorites.find((fav) => (fav.origin === action.payload.origin &&
        fav.destination === action.payload.destination));

      let element = {};
      if (exist) {
        element = {
          ...exist,
          count: exist.count + 1,
        };
      } else {
        element = {
          id: state.favorites.length + 1,
          origin: action.payload.origin,
          destination: action.payload.destination,
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
