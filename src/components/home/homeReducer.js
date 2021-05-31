import { fetchGenre, fetchMovieByGenre, fetchMovies, fetchPersons, fetchTopRatedMovie } from "../../api/fetchAPI";
import { posterUrl } from "../../api/links";
import { SET_GENRES, SET_MOVIE_BY_GENRE, SET_NOW_PLAYING, SET_PERSONS, SET_TOP_RATED, SET_MOVIE_BY_GENRE_LOADING, SET_TOP_RATED_LOADING } from "../../redux/actionTypes";

let initialState = {
  nowPlaying: [],
  genres: [],
  movieByGenre: [],
  movieByGenreLoading: false,
  persons: [],
  topRated: [],
  topRatedLoading: false,
};

// Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload.movies,
      };

    case SET_GENRES:
      return {
        ...state,
        genres: action.payload.genre,
      };

    case SET_MOVIE_BY_GENRE:
      return {
        ...state,
        movieByGenre: action.payload.movie,
      };

    case SET_MOVIE_BY_GENRE_LOADING:
      return {
        ...state,
        movieByGenreLoading: action.payload.movieByGenreLoading,
      };

    case SET_PERSONS:
      return {
        ...state,
        persons: action.payload.persons,
      };

    case SET_TOP_RATED:
      return {
        ...state,
        topRated: action.payload.movies,
      };

    case SET_TOP_RATED_LOADING:
      return {
        ...state,
        topRatedLoading: action.payload.topRatedLoading,
      };

    default:
      return state;
  }
}

// Actions creators
export const setNowPlaying = (movies) => ({
  type: SET_NOW_PLAYING,
  payload: {
    movies,
  }
})

export const setGenres = (genre) => ({
  type: SET_GENRES,
  payload: {
    genre,
  }
})

export const setMovieByGenre = (movie) => ({
  type: SET_MOVIE_BY_GENRE,
  payload: {
    movie,
  }
})

export const setMovieByGenreLoading = (movieByGenreLoading) => ({
  type: SET_MOVIE_BY_GENRE_LOADING,
  payload: {
    movieByGenreLoading,
  }
})

export const setPersons = (persons) => ({
  type: SET_PERSONS,
  payload: {
    persons,
  }
})

export const setTopRated = (movies) => ({
  type: SET_TOP_RATED,
  payload: {
    movies,
  }
})

export const setTopRatedLoading = (topRatedLoading) => ({
  type: SET_TOP_RATED_LOADING,
  payload: {
    topRatedLoading,
  }
})

// Thunk
export const getNowPlaying = () => {
  return (dispatch) => {

    const fetch = async () => {
      let data = await fetchMovies();

      const modifiedData = data['results'].map((movie) => ({
        id: movie['id'],
        backPoster: `${posterUrl}/original/${movie['backdrop_path']}`,
        popularity: movie['popularith'],
        title: movie['title'],
        poster: `${posterUrl}/original/${movie['poster_path']}`,
        overview: movie['overview'],
        rating: movie['vote_average'],
      }));

      dispatch(setNowPlaying(modifiedData))
    }

    fetch();
  }
}

export const getGenres = () => {
  return (dispatch) => {

    const fetch = async () => {
      let data = await fetchGenre();

      const modifiedData = data['genres'].map((genre) => ({
        id: genre['id'],
        name: genre['name'],
      }))

      dispatch(setGenres(modifiedData));
    }

    fetch();
  }
}

export const getMovieByGenre = (genre_id) => {
  return (dispatch) => {
    dispatch(setMovieByGenreLoading(true));

    const fetch = async () => {
      let data = await fetchMovieByGenre(genre_id);

      const modifiedData = data['results'].map((movie) => ({
        id: movie['id'],
        backPoster: movie['backdrop_path'] ? `${posterUrl}/original/${movie['backdrop_path']}` : false,
        popularity: movie['popularith'],
        title: movie['title'],
        poster: movie['poster_path'] ? `${posterUrl}/original/${movie['poster_path']}` : false,
        overview: movie['overview'],
        rating: movie['vote_average'],
      }));

      dispatch(setMovieByGenreLoading(false));
      dispatch(setMovieByGenre(modifiedData));
    }

    fetch();
  }
}

export const getPersons = () => {
  return (dispatch) => {

    const fetch = async () => {
      let data = await fetchPersons();

      const modifiedData = data['results'].map((person) => ({
        id: person['id'],
        popularity: person['popularity'],
        name: person['name'],
        profileImg: person['profile_path'] ? `${posterUrl}/w200${person['profile_path']}` : false,
        known: person['known_for_department'],
      }))

      dispatch(setPersons(modifiedData));
    }

    fetch();
  }
}

export const getTopRated = () => {
  return (dispatch) => {
    dispatch(setTopRatedLoading(true));

    const fetch = async () => {
      let data = await fetchTopRatedMovie();

      const modifiedData = data['results'].map((movie) => ({
        id: movie['id'],
        backPoster: movie['backdrop_path'] ? `${posterUrl}/original/${movie['backdrop_path']}` : false,
        popularity: movie['popularith'],
        title: movie['title'],
        poster: movie['poster_path'] ? `${posterUrl}/original/${movie['poster_path']}` : false,
        overview: movie['overview'],
        rating: movie['vote_average'],
      }));

      dispatch(setTopRatedLoading(false));
      dispatch(setTopRated(modifiedData));
    }

    fetch();
  }
}

export default homeReducer;