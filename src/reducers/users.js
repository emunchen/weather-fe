import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../actions/users";

export const initialState = {
  data: null,
  isFetching: false,
  errorMessage: null,
  status: null,
};

const usersReducer = (state = initialState, action) => {
  let error;
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: null,
        status: "storage",
        errorMessage: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        status: "authenticated",
        errorMessage: null,
      };
    case LOGIN_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return {
        ...state,
        data: null,
        status: "storage",
        errorMessage: error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export { usersReducer as default };
