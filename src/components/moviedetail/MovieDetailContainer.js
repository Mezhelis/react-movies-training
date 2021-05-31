import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isOpenModal } from "../modal-video/modalVideoReducer";
import MovieDetail from "./MovieDetail";
import { getDetail, getVideo, getCasts, getSimilarMovie } from "./movieDetailReducer";

let mapStateToProps = (state) => ({
  isOpen: state.modalVideoComponent.isOpen,
  detail: state.moviePage.detail,
  video: state.moviePage.video,
  videoPlay: state.moviePage.videoPlay,
  casts: state.moviePage.casts,
  similarMovie: state.moviePage.similarMovie,
  similarMovieLoading: state.moviePage.similarMovieLoading,

})

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    isOpenModal,
    getDetail,
    getVideo,
    getCasts,
    getSimilarMovie,
  }, dispatch)
}

const MovieDetailContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

export default MovieDetailContainer;