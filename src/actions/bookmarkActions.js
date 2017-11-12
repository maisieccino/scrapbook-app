import * as constants from "../constants/bookmarksConstants";

const crypto = window.require("crypto");

export const addBookmark = bookmark => {
  if (!bookmark.url) {
    return {};
  }
  const key =
    bookmark.key ||
    crypto
      .createHash("sha256")
      .update(bookmark.url)
      .digest("hex");
  return {
    type: constants.ADD_BOOKMARK,
    bookmark: {
      ...bookmark,
      timeAdded: Date.now(),
      key,
    },
  };
};

export const addBookmarks = bookmarks => async dispatch => {
  bookmarks.forEach(async bookmark => dispatch(addBookmark(bookmark)));
};
