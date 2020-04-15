import axios from "axios";

//Get current user(me) from token in localStorage
export const ME_FROM_TOKEN = "ME_FROM_TOKEN";
export const ME_FROM_TOKEN_SUCCESS = "ME_FROM_TOKEN_SUCCESS";
export const ME_FROM_TOKEN_FAILURE = "ME_FROM_TOKEN_FAILURE";

const ROOT_URL = process.env.REACT_APP_URL;

export function meFromToken(tokenFromStorage) {
  const request = axios({
    method: "get",
    url: `${ROOT_URL}/users/me?token=${tokenFromStorage}`,
    headers: {
      Authorization: `Bearer ${tokenFromStorage}`,
    },
  });

  return {
    type: ME_FROM_TOKEN,
    payload: request,
  };
}

export function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser,
  };
}

export function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error,
  };
}
