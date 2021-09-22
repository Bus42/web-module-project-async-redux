import { SET_CURRENT_TAB } from "../actions/headerAction";
import { EPISODES } from "../constants";

const initialState = {
  currentTab: EPISODES,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.payload,
      };

    default:
      return state;
  }
};

export default headerReducer;
