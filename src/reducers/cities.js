export const initialState = {
  data: [],
  isFetching: false,
  errorMessage: null,
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITIES_REQUEST":
      return { ...state, isFetching: true, data: [] };
    case "GET_CITIES_SUCCESS":
      return { ...state, isFetching: false, data: action.payload };
    case "GET_CITIES_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message,
      };
    case "GET_CITY_SLUG_REQUEST":
      return { ...state, isFetching: true, data: {} };
    case "GET_CITY_SLUG_SUCCESS":
      return { ...state, isFetching: false, data: action.payload };
    case "GET_CITY_SLUG_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export { citiesReducer as default };
