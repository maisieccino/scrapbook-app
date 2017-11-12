import { combineReducers } from "redux";

import fileReducer, { initialState as fileState } from "./fileReducer";

export const initialStates = {
  file: fileState,
};

export default combineReducers({
  file: fileReducer,
});
