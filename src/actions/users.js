export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

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
