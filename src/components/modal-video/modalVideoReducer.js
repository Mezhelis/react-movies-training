import { fetchMovieVideos } from "../../api/fetchAPI";
import { youtubeUrl } from "../../api/links";
import { SET_IS_OPEN, SET_TITLE, SET_YOUTUBE_URL } from "../../redux/actionTypes";

let initialState = {
  title: '',
  youtubeUrl: '',
  isOpen: false,
}

// Reducer
const modalVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };

    case SET_YOUTUBE_URL:
      return {
        ...state,
        youtubeUrl: action.payload.youtubeUrl,
      };

    case SET_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };

    default:
      return state;
  }
}

// Actions creators
export const setIsOpen = (isOpen) => ({
  type: SET_IS_OPEN,
  payload: {
    isOpen,
  }
})

export const setYoutubeUrl = (youtubeUrl) => ({
  type: SET_YOUTUBE_URL,
  payload: {
    youtubeUrl,
  }
})

export const setTitle = (title) => ({
  type: SET_TITLE,
  payload: {
    title,
  }
})

// Thunk
export const isOpenModal = (isOpen, title = '', id = 0, youtube = '') => {
  return (dispatch) => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }

    const fetch = async () => {
      let data = await fetchMovieVideos(id);

      if (data) {
        const modifiedData = {
          key: data.key,
          youtubeUrl: `${youtubeUrl + data.key}`
        }

        dispatch(setTitle(title));
        dispatch(setIsOpen(isOpen));
        dispatch(setYoutubeUrl(modifiedData.youtubeUrl));
      };
    }

    if (id) {
      fetch();
    } else if (youtube) {
      dispatch(setTitle(title));
      dispatch(setIsOpen(isOpen));
      dispatch(setYoutubeUrl(youtube));
    } else {
      dispatch(setTitle(''));
      dispatch(setIsOpen(isOpen));
      dispatch(setYoutubeUrl(''));
    }
  }
}

export const getVideoYouTube = (id) => {
  const fetch = async () => {
    let data = await fetchMovieVideos(id);

    if (data) {
      const modifiedData = {
        key: data.key,
        youtubeUrl: `${youtubeUrl + data.key}`
      }

      return modifiedData;
    };
  }

  fetch();
}

export default modalVideoReducer;