// The only way to change the data in the store is to call dispatch() on it.
// There should only be a single store in your app. To specify how different parts of the state tree
// respond to actions, you may combine several reducers into a single reducer function by using
// combineReducers.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 4. importing everything

import { createStore } from "redux";

// importing all the reducers
import allReducers from "./reducers";

// importing the Provider that provide the store to this app
import { Provider } from "react-redux";

// 5. step creating the store
// store aka global state of the application
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 6. step
// wrapping the Provider into App to be able to access the store from any component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
