import { combineReducers } from "redux";

import fileReducer, { initialState as fileState } from "./fileReducer";
import bookmarksReducer, {
  initialState as bookmarksState,
} from "./bookmarksReducer";

export const initialStates = {
  file: fileState,
  bookmarks: bookmarksState,
};

export default combineReducers({
  file: fileReducer,
  bookmarks: bookmarksReducer,
});
