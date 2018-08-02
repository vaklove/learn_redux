import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

//import the root reducer
import rootReducers from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

//create an object for the default data
const defaultState = {
  posts,
  comments
};

const composeEnhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f=>f
)
const store = createStore(rootReducers, defaultState,composeEnhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
