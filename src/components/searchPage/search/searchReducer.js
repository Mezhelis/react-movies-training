import { SET_SEARCH } from "../../../redux/actionTypes";
import { getSearchMovies } from "../searchPageReducer";

let initialState = {
  search: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };

    default:
      return state;
  }
}

// Actions creators
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: {
    search,
  }
})

// Functions
export const handleOnChange = (e) => {
  return setSearch(e.target.value);
}

export const handleOnSubmit = (e, search) => {
  e.preventDefault();

  return getSearchMovies(search);
}

export default searchReducer;