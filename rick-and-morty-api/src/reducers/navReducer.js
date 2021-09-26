import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from "../actions";

const initialState = {
  response: null,
  error: null,
  loading: true,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_EPISODES:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_LOCATIONS:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default navReducer;
