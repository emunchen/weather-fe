import axios from "axios";
const ROOT_URL = process.env.REACT_APP_URL;
axios.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
});

export const fetchCities = () => {
  const response = axios.get(ROOT_URL + "/cities");
  return response;
};

export const fetchCityBySlug = (slug) => {
  const response = axios.get(ROOT_URL + "/cities/" + slug + "/_slug");
  return response;
};

export const login = ({ email, password }) => {
  const response = axios.post(ROOT_URL + "/users/login", {
    email,
    password,
  });
  return response;
};

export const loginFromToken = (token) => {
  const response = axios.get(ROOT_URL + "/users/me", {
    headers: { Authorization: "Bearer " + token },
  });
  return response;
};
