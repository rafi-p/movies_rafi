import { combineReducers } from "redux";
import movies from "./movies";
import similar from "./moviesSimilar";
import detailMovie from "./detailMovie";

export default combineReducers({
  movies,
  similar,
  detailMovie,
});
