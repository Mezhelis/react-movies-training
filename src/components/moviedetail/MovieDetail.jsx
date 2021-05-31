import { Fragment } from "react";
import { useEffect } from "react";
import ModalVideoContainer from "../modal-video/ModalVideoContainer";
import MoviesList from "../movies-list/MoviesList";
import PersonsList from "../persons-list/PersonsList";
import MovieHeader from "./MovieHeader/MovieHeader";
import MovieInfo from "./MovieInfo/MovieInfo";

const MovieDetail = (props) => {
  const {
    match,
    detail,
    video,
    videoPlay,
    casts,
    isOpen,
    similarMovie,
    similarMovieLoading,
  } = props;

  const {
    isOpenModal,
    getDetail,
    getVideo,
    getCasts,
    getSimilarMovie
  } = props;

  let params = match.params;

  useEffect(() => {
    getDetail(params.id);
    getVideo(params.id);
    getCasts(params.id);
    getSimilarMovie(params.id);
  }, [params.id])

  return (
    <Fragment>
      {isOpen ?
        <ModalVideoContainer /> :
        null
      }
      <MovieHeader
        backPoster={detail.backPoster}
        title={detail.title}
        isOpenModal={isOpenModal}
        youtubeUrl={video.youtubeUrl}
        videoPlay={videoPlay}
        poster={detail.poster}
        rating={detail.rating}
      />

      <MovieInfo
        originalTitle={detail.originalTitle}
        overview={detail.overview}
        genres={detail.genres}
        tagline={detail.tagline}
        rating={detail.rating}
        runtime={detail.runtime}
        budget={detail.budget}
        releaseDate={detail.releaseDate}
        homepage={detail.homepage}
      />

      {casts ?
        <PersonsList title="Каст актеров" persons={casts} sizePesrons={6} /> :
        null
      }
      {similarMovie ?
        <MoviesList title="Похожие фильмы" movies={similarMovie} sizeMovies={5} loading={similarMovieLoading} /> :
        null
      }

    </Fragment>
  )
}

export default MovieDetail;