import { FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
  response: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      console.log(FETCH_LOADING);
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      console.log(FETCH_SUCCESS);
      return {
        ...state,
        loading: false,
        response: action.payload,
      };
    case FETCH_ERROR:
      console.log(FETCH_ERROR);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      console.log("default");
      console.groupEnd("reducer");
      return state;
  }
};

export default reducer;
