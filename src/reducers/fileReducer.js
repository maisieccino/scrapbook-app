import * as constants from "../constants/fileConstants";

export const initialState = {
  isLoadingFile: false,
  isSavingFile: false,
  pathname: "",
  isOpen: false,
  error: "",
};

export default (state = initialState, action = null) => {
  const { type, pathname, error } = action;
  switch (type) {
    case constants.SET_IS_LOADING_FILE: {
      return {
        ...state,
        isLoadingFile: true,
        pathname: "",
        error: "",
      };
    }

    case constants.LOAD_FILE_SUCCESS: {
      return {
        ...state,
        isLoadingFile: false,
        isOpen: true,
        pathname,
      };
    }

    case constants.LOAD_FILE_FAILURE: {
      return {
        ...state,
        isLoadingFile: false,
        error,
      };
    }

    case constants.SET_IS_SAVING_FILE: {
      return {
        ...state,
        isSavingFile: true,
        error: "",
      };
    }

    case constants.SAVE_FILE_SUCCESS: {
      return {
        ...state,
        isSavingFile: false,
      };
    }

    case constants.SAVE_FILE_FAILURE: {
      return {
        ...state,
        isSavingFile: false,
        error,
      };
    }

    case constants.CLOSE_FILE: {
      return {
        ...state,
        pathname: "",
        isOpen: false,
      };
    }

    default: {
      return state;
    }
  }
};
