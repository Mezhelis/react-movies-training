import { Fragment } from "react";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalVideoContainer from "../modal-video/ModalVideoContainer";
import MoviesList from "../movies-list/MoviesList";
import PersonsList from "../persons-list/PersonsList";
import CarouselMovies from "./carousel/CarouselMovies";
import Genres from "./genres/Genres";

const Home = (props) => {
  const {
    isOpen,
    nowPlaying,
    genres,
    movieByGenre,
    movieByGenreLoading,
    persons,
    topRated,
    topRatedLoading
  } = props;

  const {
    isOpenModal,
    getNowPlaying,
    getGenres,
    getMovieByGenre,
    getPersons,
    getTopRated,
  } = props;

  useEffect(() => {
    getNowPlaying();
    getGenres();
    getMovieByGenre();
    getPersons();
    getTopRated();
  }, []);

  return (
    <Fragment>

      {isOpen ?
        <ModalVideoContainer /> :
        null
      }

      <CarouselMovies isOpenModal={isOpenModal} nowPlaying={nowPlaying} size={5} />

      <Genres genres={genres} getMovieByGenre={getMovieByGenre} />

      <MoviesList title="Фильмы по жанру" movies={movieByGenre} sizeMovies={10} loading={movieByGenreLoading} />

      <MoviesList title="Рейтинговые фильмы" movies={topRated} sizeMovies={5} loading={topRatedLoading} />

      <PersonsList title="Персоны недели" persons={persons} sizePesrons={6} />

    </Fragment>
  )
}

export default Home;