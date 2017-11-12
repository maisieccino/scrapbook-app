import * as constants from "../constants/bookmarksConstants";

export const initialState = {
  bookmarks: {},
  stars: {},
  tags: {},
  error: "",
};

/**
 * Bookmark object
 * {
 *  key: SHA256 of the URL. should have a minimal number of collisions.
 *  url: bookmark url
 *  title: title of the webpage
 *  content: any additional text
 *  tags: array of tags to categorise this bookmark
 * }
 */

export default (state = initialState, action = null) => {
  const { type, bookmark, key } = action;
  const { bookmarks, tags, stars } = state;

  switch (type) {
    case constants.ADD_BOOKMARK: {
      // use temp vars so we don't mutate state
      const bm = Object.assign({}, bookmarks);
      const t = Object.assign({}, tags);
      // add bookmark to array if not already taken.
      if (!bm[bookmark.key]) {
        bm[bookmark.key] = bookmark;
        // add tags to state.
        if (bm.tags) {
          bookmark.tags.forEach(tag => {
            // create tag if not already existing
            if (!t[tag]) {
              t[tag] = {};
            }
            t[tag][bookmark.key] = bookmark;
          });
        }
      }
      return {
        ...state,
        bookmarks: bm,
        tags: t,
      };
    }

    case constants.REMOVE_BOOKMARK: {
      // remove bookmark, using key.
      delete bookmarks[key];
      delete tags[key];
      delete stars[key];
      return {
        ...state,
        bookmarks,
        tags,
      };
    }

    case constants.UPDATE_BOOKMARK: {
      bookmarks[bookmark.key] = {
        ...bookmarks[key],
        ...bookmark,
      };
      bookmark.tags.forEach(tag => {
        tags[tag][bookmark.key] = bookmark;
      });
      if (stars[bookmark.key]) {
        stars[bookmark.key] = bookmarks[bookmark.key];
      }
      return {
        ...state,
        bookmarks,
        tags,
        stars,
      };
    }

    default: {
      return state;
    }
  }
};
