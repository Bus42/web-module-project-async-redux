export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

export const setCurrentTab = (tab) => {
  return {
    type: SET_CURRENT_TAB,
    payload: tab,
  };
};
