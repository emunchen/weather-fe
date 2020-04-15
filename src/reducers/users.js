import {
  ME_FROM_TOKEN,
  ME_FROM_TOKEN_SUCCESS,
  ME_FROM_TOKEN_FAILURE,
} from "../actions/users";

export const initialState = {
  user: null,
  isFetching: false,
  errorMessage: null,
  status: null,
};

const usersReducer = (state = initialState, action) => {
  let error;
  switch (action.type) {
    case ME_FROM_TOKEN:
      return {
        ...state,
        isFetching: true,
        user: null,
        status: "storage",
        errorMessage: null,
      };
    case ME_FROM_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload.data,
        status: "authenticated",
        errorMessage: null,
      };
    case ME_FROM_TOKEN_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return {
        ...state,
        user: null,
        status: "storage",
        errorMessage: error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export { usersReducer as default };
