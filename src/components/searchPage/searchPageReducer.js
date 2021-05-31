import { fetchSearchMovie } from "../../api/fetchAPI";
import { posterUrl } from "../../api/links";
import { SET_SEARCH_ACTIVE_PAGE, SET_SEARCH_IS_OPEN, SET_SEARCH_QUERY, SET_SEARCH_RESULT, SET_SEARCH_RESULT_PAGES, SET_SEARCH_LOADING } from "../../redux/actionTypes";
import { setSearch } from "./search/searchReducer";

let initialState = {
  searchIsOpen: false,
  searchQuery: '',
  searchResult: [],
  searchResultPages: 1,
  searchActivePage: 1,
  loading: false
};

// Reducer
const searchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_IS_OPEN:
      return {
        ...state,
        search: action.payload.isOpen,
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };

    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.searchResult,
      };

    case SET_SEARCH_RESULT_PAGES:
      return {
        ...state,
        searchResultPages: action.payload.searchResultPages,
      };

    case SET_SEARCH_ACTIVE_PAGE:
      return {
        ...state,
        searchActivePage: action.payload.searchActivePage,
      };

    case SET_SEARCH_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
}

// Actions creators
export const setSearchPageReducer = (isOpen) => ({
  type: SET_SEARCH_IS_OPEN,
  payload: {
    isOpen,
  }
})

export const setSearchQuery = (searchQuery) => ({
  type: SET_SEARCH_QUERY,
  payload: {
    searchQuery,
  }
})

export const setSearchResult = (searchResult) => ({
  type: SET_SEARCH_RESULT,
  payload: {
    searchResult,
  }
})

export const setSearchResultPages = (searchResultPages) => ({
  type: SET_SEARCH_RESULT_PAGES,
  payload: {
    searchResultPages,
  }
})

export const setSearchActivePage = (searchActivePage) => ({
  type: SET_SEARCH_ACTIVE_PAGE,
  payload: {
    searchActivePage,
  }
})

export const setSearchLoading = (loading) => ({
  type: SET_SEARCH_LOADING,
  payload: {
    loading,
  }
})

// Functions
export const onPageChanged = (search, page) => {
  return getSearchMovies(search, page)
}

// Thunk
export const getSearchMovies = (search, page = 1) => {
  return (dispatch) => {
    dispatch(setSearchLoading(true));

    const fetch = async () => {
      let data = await fetchSearchMovie(search, page);

      const modifiedData = data['results'].map((movie) => ({
        id: movie['id'],
        backPoster: movie['backdrop_path'] ? `${posterUrl}/original/${movie['backdrop_path']}` : false,
        popularity: movie['popularith'],
        title: movie['title'],
        poster: movie['poster_path'] ? `${posterUrl}/original/${movie['poster_path']}` : false,
        overview: movie['overview'],
        rating: movie['vote_average'],
      }));

      dispatch(setSearchLoading(false));
      dispatch(setSearchActivePage(page));
      dispatch(setSearchResultPages(data.total_pages));
      dispatch(setSearchResult(modifiedData));
      dispatch(setSearchQuery(search));
      dispatch(setSearch(''));
    }

    fetch();
  }
}

export default searchPageReducer;