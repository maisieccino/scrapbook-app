import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Icon from "react-feather";
import Page from "../components/layout/Page";
import { loadFile } from "../actions/fileActions";

const remote = window.require("electron").remote; // eslint-disable-line prefer-destructuring
const dialog = remote.dialog; // eslint-disable-line prefer-destructuring

class Index extends Component {
  static propTypes = {
    loadFile: PropTypes.func,
    isLoadingFile: PropTypes.bool,
  };

  static defaultProps = {
    loadFile: () => {},
    isLoadingFile: false,
  };

  static mapStateToProps = state => ({
    isLoadingFile: state.file.isLoadingFile,
  });

  static mapDispatchToProps = dispatch => ({
    loadFile: pathname => dispatch(loadFile(pathname)),
  });

  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
    };
  }

  onOpenFileClick() {
    const filepath = dialog.showOpenDialog({
      filters: [{ name: "JSON File", extensions: ["json"] }],
    });
    if (filepath) {
      this.props.loadFile(filepath[0]);
    }
  }

  render() {
    return (
      <div className="App">
        <article>
          {this.state.isCreating ? (
            <Page title="Create new store">yada yada</Page>
          ) : (
            <Page className="home" title="Scrapbook">
              <h2>Bookmarks manager.</h2>
              <p>Open a file:</p>
              <p>
                <button onClick={() => this.onOpenFileClick()}>
                  Open file...
                </button>
              </p>
              {this.props.isLoadingFile && (
                <p>
                  <Icon.RefreshCw />
                </p>
              )}
              <p>
                <button>Create new file</button>
              </p>
            </Page>
          )}
        </article>
      </div>
    );
  }
}

export default connect(Index.mapStateToProps, Index.mapDispatchToProps)(Index);

export { default as Home } from "./Home";
export { default as Settings } from "./Settings";
export { default as Starred } from "./Starred";
export { default as Tags } from "./Tags";
