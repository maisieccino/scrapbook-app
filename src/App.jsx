import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { generate } from "shortid";
import "./App.css";

import routes from "./routes";

import Navigation from "./components/Navigation";
import Index from "./containers";

class App extends Component {
  static propTypes = {
    isFileOpen: PropTypes.bool,
  };

  static defaultProps = {
    isFileOpen: false,
  };

  static mapStateToProps = state => ({
    isFileOpen: state.file.isOpen,
  });

  render() {
    if (this.props.isFileOpen) {
      return (
        <BrowserRouter>
          <div className="App">
            <article>
              <Switch>
                {/* generate our routes from the shared routes array */}
                {routes.map(({ component, path, ...rest }) => (
                  <Route
                    path={path}
                    component={component}
                    key={generate()}
                    {...rest}
                  />
                ))}
              </Switch>
            </article>
            <Navigation routes={routes} />
          </div>
        </BrowserRouter>
      );
    }
    return <Index />;
  }
}

export default connect(App.mapStateToProps)(App);
