import { fetchCasts, fetchMovieDetail, fetchMovieVideos, fetchSimilarMovie } from "../../api/fetchAPI";
import { posterUrl, youtubeUrl } from "../../api/links";
import { SET_CASTS, SET_DETEIL, SET_SIMILAR_MOVIE, SET_VIDEO, SET_VIDEO_PLAY, SET_SIMILAR_MOVIE_LOADING } from "../../redux/actionTypes";

let initialState = {
  detail: {},
  video: [],
  videoPlay: false,
  casts: [],
  similarMovie: [],
  similarMovieLoading: false,
}

// Reducer
const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETEIL:
      return {
        ...state,
        detail: action.payload.detail,
      };

    case SET_VIDEO:
      return {
        ...state,
        video: action.payload.video,
      };

    case SET_VIDEO_PLAY:
      return {
        ...state,
        videoPlay: action.payload.videoPlay,
      };

    case SET_CASTS:
      return {
        ...state,
        casts: action.payload.casts,
      };

    case SET_SIMILAR_MOVIE:
      return {
        ...state,
        similarMovie: action.payload.similarMovie,
      };

    case SET_SIMILAR_MOVIE_LOADING:
      return {
        ...state,
        similarMovieLoading: action.payload.similarMovieLoading,
      };

    default:
      return state;
  }
}

// Actions creators
export const setDetail = (detail) => ({
  type: SET_DETEIL,
  payload: {
    detail,
  }
})

export const setVideo = (video) => ({
  type: SET_VIDEO,
  payload: {
    video,
  }
})

export const setVideoPlay = (videoPlay) => ({
  type: SET_VIDEO_PLAY,
  payload: {
    videoPlay,
  }
})

export const setCasts = (casts) => ({
  type: SET_CASTS,
  payload: {
    casts,
  }
})

export const setSimilarMovie = (similarMovie) => ({
  type: SET_SIMILAR_MOVIE,
  payload: {
    similarMovie,
  }
})

export const setSimilarMovieLoading = (similarMovieLoading) => ({
  type: SET_SIMILAR_MOVIE_LOADING,
  payload: {
    similarMovieLoading,
  }
})

// Thunk
export const getDetail = (id) => {
  return (dispatch) => {

    const fetch = async () => {
      let data = await fetchMovieDetail(id);

      const modifiedData = {
        id: data['id'],
        backPoster: data['backdrop_path'] ? `${posterUrl}/original/${data['backdrop_path']}` : false,
        title: data['title'],
        originalTitle: data['original_title'],
        poster: data['poster_path'] ? `${posterUrl}/original/${data['poster_path']}` : false,
        overview: data['overview'],
        rating: data['vote_average'],
        tagline: data['tagline'],
        runtime: data['runtime'],
        genres: data['genres'],
        releaseDate: data['release_date'],
        budget: data['budget'],
        homepage: data['homepage'],
      };

      dispatch(setDetail(modifiedData))
    }

    fetch();
  }
}

export const getVideo = (id) => {
  return (dispatch) => {
    const fetch = async () => {
      let data = await fetchMovieVideos(id);

      if (data) {
        const modifiedData = {
          key: data.key,
          youtubeUrl: `${youtubeUrl + data.key}`
        }

        dispatch(setVideo(modifiedData));
        dispatch(setVideoPlay(true));
      };
    }

    fetch();
  }
}

export const getCasts = (id) => {
  return (dispatch) => {
    const fetch = async () => {
      let data = await fetchCasts(id);

      const modifiedData = data['cast'].map((person) => ({
        id: person['cast_id'],
        character: person['character'],
        name: person['name'],
        profileImg: person['profile_path'] ? `${posterUrl}/w200${person['profile_path']}` : false,
      }))

      dispatch(setCasts(modifiedData));
    }

    fetch();
  }
}

export const getSimilarMovie = (id) => {
  return (dispatch) => {
    dispatch(setSimilarMovieLoading(true));

    const fetch = async () => {
      let data = await fetchSimilarMovie(id);

      const modifiedData = data['results'].map((movie) => ({
        id: movie['id'],
        backPoster: movie['backdrop_path'] ? `${posterUrl}/original/${movie['backdrop_path']}` : false,
        popularity: movie['popularith'],
        title: movie['title'],
        poster: movie['poster_path'] ? `${posterUrl}/original/${movie['poster_path']}` : false,
        overview: movie['overview'],
        rating: movie['vote_average'],
      }));

      dispatch(setSimilarMovieLoading(false));
      dispatch(setSimilarMovie(modifiedData));
    }

    fetch();
  }
}

export default movieDetailReducer;