import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import Page from "../components/layout/Page";

const BookmarkView = props => {
  console.log(props);
  // console.log(bookmarks);
  // const { title, url, content, startDate } = bookmarks[key];
  return (
    <Page title="bookmark">
      {/* <p>URL: {url}</p> */}
      {/* <p>Added: {moment(startDate).fromNow()}</p> */}
    </Page>
  );
};

BookmarkView.defaultProps = {
  match: { params: {} },
};

const mapStateToProps = (state, props) => {
  console.log(props);
  // return {
  //   ...state.bookmarks.bookmarks[match.params.key],
  // };
};

export default connect(mapStateToProps)(BookmarkView);
