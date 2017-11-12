import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { generate } from "shortid";
import io from "socket.io-client";
import Page from "../components/layout/Page";
import { BookmarkCard } from "../components/layout/Card";
import CardStack from "../components/layout/CardStack";
import { addBookmark } from "../actions/bookmarkActions";
import { saveFile } from "../actions/fileActions";

class Home extends Component {
  static propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.shape()),
    addBookmark: PropTypes.func,
    saveFile: PropTypes.func,
    bookmarkData: PropTypes.shape(),
    pathname: PropTypes.string,
  };

  static defaultProps = {
    bookmarks: [],
    addBookmark: () => {},
    saveFile: () => {},
    bookmarkData: {},
    pathname: "",
  };

  static mapStateToProps = state => ({
    bookmarks: Object.keys(state.bookmarks.bookmarks).map(
      key => state.bookmarks.bookmarks[key],
    ),
    bookmarkData: {
      bookmarks: state.bookmarks.bookmarks,
      tags: state.bookmarks.tags,
      stars: state.bookmarks.stars,
    },
    pathname: state.file.pathname,
  });

  static mapDispatchToProps = dispatch => ({
    addBookmark: bookmark => dispatch(addBookmark(bookmark)),
    saveFile: (pathname, data) => dispatch(saveFile(pathname, data)),
  });

  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.socket = io("http://localhost:9876/app");
    this.socket.on("newBookmark", data => {
      this.props.addBookmark(data);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.bookmarks.length &&
      nextProps.bookmarks.length !== this.props.bookmarks.length
    ) {
      console.log("saving...");
      console.log(nextProps.bookmarkData);
      this.props.saveFile(this.props.pathname, nextProps.bookmarkData);
    }
  }

  render() {
    const { bookmarks } = this.props;
    return (
      <Page className="home" title="Your Bookmarks">
        <CardStack>
          {bookmarks.length ? (
            bookmarks.map(bookmark => (
              <BookmarkCard key={generate()} {...bookmark} />
            ))
          ) : (
            <h3>You have no bookmarks yet. Why not add some?</h3>
          )}
        </CardStack>
      </Page>
    );
  }
}

export default connect(Home.mapStateToProps, Home.mapDispatchToProps)(Home);
