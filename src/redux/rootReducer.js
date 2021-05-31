import { combineReducers } from "redux";
import homeReducer from "../components/home/homeReducer";
import movieDetailReducer from "../components/moviedetail/movieDetailReducer";
import modalVideoReducer from "../components/modal-video/modalVideoReducer"
import searchPageReducer from "../components/searchPage/searchPageReducer";
import searchReducer from "../components/searchPage/search/searchReducer";

const reducers = combineReducers({
  searchPage: searchPageReducer,
  homePage: homeReducer,
  moviePage: movieDetailReducer,

  searchComponent: searchReducer,
  modalVideoComponent: modalVideoReducer,
});

export default reducers;