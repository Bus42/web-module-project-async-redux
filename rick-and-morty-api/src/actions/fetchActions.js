export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchLoading = () => {
  return { type: FETCH_LOADING };
};

export const fetchSuccess = (response) => {
  return { type: FETCH_SUCCESS, payload: response };
};

export const fetchError = (error) => {
  return { type: FETCH_ERROR, payload: error };
};
