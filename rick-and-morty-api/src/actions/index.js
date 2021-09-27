import axios from "axios";

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchLoading = () => {
  return { type: FETCH_LOADING };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchError = (error) => {
  return { type: FETCH_ERROR, payload: error };
};

export const fetchData = (url) => (dispatch) => {
  console.log(url);
  dispatch(fetchLoading());
  axios
    .get(url)
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchError(err));
    });
};
