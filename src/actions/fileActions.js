import * as constants from "../constants/fileConstants";

const fs = window.require("fs");

export const setIsLoadingFile = () => ({
  type: constants.SET_IS_LOADING_FILE,
});

export const setIsSavingFile = () => ({
  type: constants.SET_IS_SAVING_FILE,
});

export const loadFileSuccess = pathname => ({
  type: constants.LOAD_FILE_SUCCESS,
  pathname,
});

export const loadFileFailure = error => ({
  type: constants.LOAD_FILE_FAILURE,
  error,
});

export const saveFileSuccess = () => ({
  type: constants.SAVE_FILE_SUCCESS,
});

export const saveFileFailure = error => ({
  type: constants.SAVE_FILE_FAILURE,
  error,
});

export const loadFile = pathname => async dispatch => {
  await dispatch(setIsLoadingFile());
  // load the file.
  try {
    const raw = await new Promise((res, rej) =>
      fs.readFile(pathname, (err, data) => {
        if (err) {
          rej(err);
        }
        res(data);
      }),
    );
    const data = JSON.parse(raw);
    return dispatch(loadFileSuccess(pathname));
  } catch (error) {
    return dispatch(
      loadFileFailure(typeof error === "string" ? error : error.message),
    );
  }
};
