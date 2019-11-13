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
          origin: originPlace[0],
          originLocation: `${originPlace[1]}, ${originPlace[2]}`,
          destination: destinationPlace[0],
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
