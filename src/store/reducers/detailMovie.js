const initialState = {
  data: {},
  loading: false,
  error: null,
};

export default function detailMovie(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_DETAIL":
      return { ...state, data: action.payload };
    case "SET_LOADING_DETAIL":
      return { ...state, loading: action.payload };
    case "SET_ERROR_DETAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
