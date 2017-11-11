import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { generate } from "shortid";
import "./App.css";

import routes from "./routes";

import Navigation from "./components/Navigation";

const App = () => (
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

export default App;
