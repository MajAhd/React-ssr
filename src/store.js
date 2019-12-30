import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "./Redux/reducers";
// import logger from "redux-logger";
import mid from "./Redux/Middlware/mid";

const composeEnhancers = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const configureStore = function(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...[promiseMiddleware, mid]))
  );
};
export default configureStore;
