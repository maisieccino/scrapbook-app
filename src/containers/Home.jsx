import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { generate } from "shortid";
import Page from "../components/layout/Page";
import { BookmarkCard } from "../components/layout/Card";
import CardStack from "../components/layout/CardStack";

class Home extends Component {
  static propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.shape()),
  };

  static defaultProps = {
    bookmarks: [],
  };

  static mapStateToProps = state => ({
    bookmarks: Object.keys(state.bookmarks.bookmarks).map(
      key => state.bookmarks.bookmarks[key],
    ),
  });

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

export default connect(Home.mapStateToProps)(Home);
