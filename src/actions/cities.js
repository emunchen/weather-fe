export const GET_CITIES_REQUEST = "GET_CITIES_REQUEST";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_FAILURE = "GET_CITIES_FAILURE";

export const GET_CITY_SLUG_REQUEST = "GET_CITY_SLUG_REQUEST";
export const GET_CITY_SLUG_SUCCESS = "GET_CITY_SLUG_SUCCESS";
export const GET_CITY_SLUG_FAILURE = "GET_CITY_SLUG_FAILURE";

export const fetchCities = () => {
  return { type: GET_CITIES_REQUEST };
};

export const fetchCitiesSuccess = (cities) => {
  return {
    type: GET_CITIES_SUCCESS,
    payload: cities,
  };
};

export const fetchCitiesFailure = (error) => {
  return {
    type: GET_CITIES_FAILURE,
    payload: error,
  };
};

export const fetchCitySlug = (slug) => {
  return { type: GET_CITY_SLUG_REQUEST, payload: slug };
};

export const fetchCitySlugSuccess = (city) => {
  return {
    type: GET_CITY_SLUG_SUCCESS,
    payload: city,
  };
};

export const fetchCitySlugFailure = (error) => {
  return {
    type: GET_CITY_SLUG_FAILURE,
    payload: error,
  };
};
