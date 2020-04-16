import axios from "axios";
const ROOT_URL = process.env.REACT_APP_URL;

export const fetchCities = () => {
  const response = axios(ROOT_URL + "/cities");
  return response;
};

export const fetchCityBySlug = (slug) => {
  const response = axios(ROOT_URL + "/cities/" + slug + "/_slug");
  return response;
};

export const login = ({ email, password }) => {
  const response = axios.post(ROOT_URL + "/users/login", {
    email,
    password,
  });
  return response;
};
