export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const LOGIN_USER_FROM_TOKEN_REQUEST = "LOGIN_USER_FROM_TOKEN_REQUEST";
export const LOGIN_USER_FROM_TOKEN_SUCCESS = "LOGIN_USER_FROM_TOKEN_SUCCESS";
export const LOGIN_USER_FROM_TOKEN_FAILURE = "LOGIN_USER_FROM_TOKEN_FAILURE";

export const userLogin = (email, password) => {
  return { type: LOGIN_USER_REQUEST, payload: { email, password } };
};

export const userLoginSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const userLoginFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const userLoginFromToken = (token) => {
  return { type: LOGIN_USER_FROM_TOKEN_REQUEST, payload: token };
};

export const userLoginFromTokenSuccess = (user) => {
  return {
    type: LOGIN_USER_FROM_TOKEN_SUCCESS,
    payload: user,
  };
};

export const userLoginFromTokenFailure = (error) => {
  return {
    type: LOGIN_USER_FROM_TOKEN_FAILURE,
    payload: error,
  };
};
