import axios from "axios";
import { url } from "./links";

const apiKey = process.env.REACT_APP_API_KEY;
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const searchUrl = `${url}/search/movie`;

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1
      }
    });

    return data;
  } catch (error) {

  }
}

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1,
      }
    })

    return data;
  } catch (error) {

  }
}

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1,
        with_genres: genre_id,
      }
    })

    return data;
  } catch (error) {

  }
}

export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
      }
    })
    return data;
  } catch (error) {

  }
}

export const fetchTopRatedMovie = async () => {
  try {
    const { data } = await axios.get(topratedUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1
      }
    })

    return data;
  } catch (error) {

  }
}

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
      }
    })

    return data;
  } catch (error) {

  }
}

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
      }
    });

    return data['results'][0];
  } catch (error) {

  }
}

export const fetchCasts = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
      }
    });

    return data;
  } catch (error) {

  }
}

export const fetchSimilarMovie = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
      }
    });

    return data;
  } catch (error) {

  }
}

export const fetchSearchMovie = async (search, page) => {
  try {
    const { data } = await axios.get(searchUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        query: search,
        page: page
      }
    });

    return data;
  } catch (error) {

  }
}