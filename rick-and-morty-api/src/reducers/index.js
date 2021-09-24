import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from "../actions";

const initialState = {
  response: null,
  error: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return state;
    case GET_EPISODES:
      return state;
    case GET_LOCATIONS:
      return state;
    default:
      return state;
  }
};

export default reducer;
