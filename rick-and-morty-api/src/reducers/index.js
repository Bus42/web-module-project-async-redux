import { combineReducers } from "react-redux";
import navReducer from "./navReducer";
import fetchReducer from "./fetchReducer";

export const reduccer = combineReducers({
  navReducer,
  fetchReducer,
});
