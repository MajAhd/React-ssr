import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import configureStore from "./store";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

const state = window.__initialData__;
delete window.__initialData__;
const store = configureStore(state);

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
