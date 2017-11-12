import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { initialStates } from "./reducers";
import "./index.css";
import App from "./App";

require("./server/index");

const store = configureStore(Object.assign({}, initialStates));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
