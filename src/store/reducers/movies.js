const initialState = {
  data: {},
  loading: false,
  error: null,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_MOVIES":
      return { ...state, data: action.payload };
    case "SET_LOADING_MOVIES":
      return { ...state, loading: action.payload };
    case "SET_ERROR_MOVIES":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
