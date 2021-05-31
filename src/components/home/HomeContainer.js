import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isOpenModal } from "../modal-video/modalVideoReducer";
import Home from "./Home";
import { getNowPlaying, getGenres, getMovieByGenre, getPersons, getTopRated } from "./homeReducer";

let mapStateToProps = (state) => ({
  isOpen: state.modalVideoComponent.isOpen,
  nowPlaying: state.homePage.nowPlaying,
  genres: state.homePage.genres,
  movieByGenre: state.homePage.movieByGenre,
  movieByGenreLoading: state.homePage.movieByGenreLoading,
  persons: state.homePage.persons,
  topRated: state.homePage.topRated,
  topRatedLoading: state.homePage.topRatedLoading,
})

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    isOpenModal,
    getNowPlaying,
    getGenres,
    getMovieByGenre,
    getPersons,
    getTopRated,
  }, dispatch)
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;