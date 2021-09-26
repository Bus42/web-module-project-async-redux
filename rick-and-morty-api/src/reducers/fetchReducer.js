import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions/fetchActions";

const initialState = {
  response: null,
  loading: true,
  error: null,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
