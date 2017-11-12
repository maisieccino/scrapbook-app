import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { generate } from "shortid";
import io from "socket.io-client";
import Page from "../components/layout/Page";
import { BookmarkCard } from "../components/layout/Card";
import CardStack from "../components/layout/CardStack";
import { addBookmark } from "../actions/bookmarkActions";

class Home extends Component {
  static propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.shape()),
    addBookmark: PropTypes.func,
  };

  static defaultProps = {
    bookmarks: [],
    addBookmark: () => {},
  };

  static mapStateToProps = state => ({
    bookmarks: Object.keys(state.bookmarks.bookmarks).map(
      key => state.bookmarks.bookmarks[key],
    ),
  });

  static mapDispatchToProps = dispatch => ({
    addBookmark: bookmark => dispatch(addBookmark(bookmark)),
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
