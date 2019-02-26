// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxPromise from 'redux-promise';

// internal modules
import App from "./components/app";

// State and reducers
import watchlistsReducer from './reducers/watchlists_reducer'
import selectedWatchlistReducer from './reducers/selected_watchlist_reducer'
import moviesReducer from './reducers/movies_reducer'
import userDataReducer from './reducers/user_data_reducer'
import requestsReducer from './reducers/requests_reducer'

const root = document.getElementById("react-root")

const reducers = combineReducers({
  watchlists: watchlistsReducer,
  selectedWatchlist: selectedWatchlistReducer,
  movies: moviesReducer,
  userData: userDataReducer,
  requests: requestsReducer
});

const initialState = {
  watchlists: [],
  selectedWatchlist: {},
  movies: [],
  userData : JSON.parse(root.dataset.user),
  requests: []
}

let middlewares = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
} else {
  middlewares = composeEnhancers(applyMiddleware(reduxPromise));
}

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  root
);
