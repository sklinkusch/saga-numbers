import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";

const initialState = {
  fetching: false,
  message: null,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, message: null, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, message: action.message };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
};
