const initialState = {
  data: {},
  loading: false,
  error: null,
};

export default function similar(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_SIMILAR":
      return { ...state, data: action.payload };
    case "SET_LOADING_SIMILAR":
      return { ...state, loading: action.payload };
    case "SET_ERROR_SIMILAR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
