import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Icon from "react-feather";
import Page from "../components/layout/Page";
import { createFile, loadFile } from "../actions/fileActions";

const remote = window.require("electron").remote; // eslint-disable-line prefer-destructuring
const dialog = remote.dialog; // eslint-disable-line prefer-destructuring

class Index extends Component {
  static fileFilters = [{ name: "JSON File", extensions: ["json"] }];

  static propTypes = {
    loadFile: PropTypes.func,
    createFile: PropTypes.func,
    isLoadingFile: PropTypes.bool,
  };

  static defaultProps = {
    loadFile: () => {},
    createFile: () => {},
    isLoadingFile: false,
  };

  static mapStateToProps = state => ({
    isLoadingFile: state.file.isLoadingFile,
  });

  static mapDispatchToProps = dispatch => ({
    loadFile: pathname => dispatch(loadFile(pathname)),
    createFile: pathname => dispatch(createFile(pathname)),
  });

  onOpenFileClick() {
    const filepath = dialog.showOpenDialog({
      filters: Index.fileFilters,
    });
    if (filepath) {
      this.props.loadFile(filepath[0]);
    }
  }

  onNewFileClick() {
    const filepath = dialog.showSaveDialog({
      title: "Location of new bookmarks file",
      filters: Index.fileFilters,
    });
    if (filepath) {
      this.props.createFile(filepath);
    }
  }

  render() {
    return (
      <div className="App">
        <article>
          <Page className="home" title="Scrapbook">
            <h2>Bookmarks manager.</h2>
            <p>Open a file:</p>
            <p>
              <button onClick={() => this.onOpenFileClick()}>
                Open file...
              </button>
            </p>
            <p>
              <button onClick={() => this.onNewFileClick()}>
                Create new file...
              </button>
            </p>
            {this.props.isLoadingFile && (
              <p>
                <Icon.RefreshCw />
              </p>
            )}
          </Page>
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
