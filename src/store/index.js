import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

export const Movies = (url) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_MOVIES", payload: true });
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA_MOVIES", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "SET_ERROR_MOVIES", payload: error });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING_MOVIES", payload: false });
      });
  };
};

export const DetailMovie = (url) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_DETAIL", payload: true });
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA_DETAIL", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "SET_ERROR_DETAIL", payload: error });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING_DETAIL", payload: false });
      });
  };
};

export const SimilarMovies = (url) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_SIMILAR", payload: true });
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA_SIMILAR", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "SET_ERROR_SIMILAR", payload: error });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING_SIMILAR", payload: false });
      });
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
