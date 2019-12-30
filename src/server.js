import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
module.exports = function(store, url = "/", helmetContext = {}) {
  const preloadedState = store.getState();
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </StaticRouter>
    </Provider>
  );
  return {
    content,
    preloadedState
  };
};
