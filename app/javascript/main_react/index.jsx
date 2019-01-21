// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from "./components/app";

// State and reducers
import watchlistsReducer from './reducers/watchlists_reducer'
import selectedWatchlistReducer from './reducers/selected_watchlist_reducer'
import moviesReducer from './reducers/movies_reducer'


const reducers = combineReducers({
  watchlists: watchlistsReducer,
  selectedWatchlist: selectedWatchlistReducer,
  movies: moviesReducer,
});

const initialState = {
  watchlists: [
    {
        "id": 4,
        "user_1_id": 12,
        "user_2": {
            "id": 13,
            "first_name": "Bob",
            "last_name": "Jones"
        }
    }
  ],
  selectedWatchlist: {
    "id": 4,
    "user_1_id": 12,
    "user_2": {
        "id": 13,
        "first_name": "Bob",
        "last_name": "Jones"
    }
  },
  movies: [
    {
      "id": 7,
      "title": "Batman",
      "year": 1969,
      "genre": "Action",
      "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus non est in viverra. Pellentesque sit amet leo nulla. Nunc rhoncus mattis porta. Etiam hendrerit blandit dui, et vestibulum justo cursus at. Nam dignissim suscipit mauris nec convallis. Fusce malesuada a enim at aliquet. Aenean euismod mauris justo, at viverra justo tincidunt eget. Nulla placerat sed arcu ac volutpat. Pellentesque nec enim consectetur, fringilla tellus in, egestas mauris. Aenean quis ex eu justo sodales dapibus. Etiam molestie mauris nec malesuada pulvinar. Etiam eget felis dapibus, laoreet ligula vitae, pretium enim. In pretium arcu id tellus commodo dapibus. Vestibulum non semper urna. Cras sed facilisis dolor, sit amet efficitur purus.",
      "watched": true,
      "added_by": {
          "id": 12,
          "first_name": "Kiv",
          "last_name": "Benzopyla"
      }
    },
    {
      "id": 9,
      "title": "Give It Away",
      "year": 2002,
      "genre": "Action",
      "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus non est in viverra. Pellentesque sit amet leo nulla. Nunc rhoncus mattis porta. Etiam hendrerit blandit dui, et vestibulum justo cursus at. Nam dignissim suscipit mauris nec convallis. Fusce malesuada a enim at aliquet. Aenean euismod mauris justo, at viverra justo tincidunt eget. Nulla placerat sed arcu ac volutpat. Pellentesque nec enim consectetur, fringilla tellus in, egestas mauris. Aenean quis ex eu justo sodales dapibus. Etiam molestie mauris nec malesuada pulvinar. Etiam eget felis dapibus, laoreet ligula vitae, pretium enim. In pretium arcu id tellus commodo dapibus. Vestibulum non semper urna. Cras sed facilisis dolor, sit amet efficitur purus.",
      "watched": true,
      "added_by": {
          "id": 13,
          "first_name": "Bob",
          "last_name": "Jones"
      }
    },
    {
      "id": 10,
      "title": "Batman Again",
      "year": 2018,
      "genre": "Action",
      "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus non est in viverra. Pellentesque sit amet leo nulla. Nunc rhoncus mattis porta. Etiam hendrerit blandit dui, et vestibulum justo cursus at. Nam dignissim suscipit mauris nec convallis. Fusce malesuada a enim at aliquet. Aenean euismod mauris justo, at viverra justo tincidunt eget. Nulla placerat sed arcu ac volutpat. Pellentesque nec enim consectetur, fringilla tellus in, egestas mauris. Aenean quis ex eu justo sodales dapibus. Etiam molestie mauris nec malesuada pulvinar. Etiam eget felis dapibus, laoreet ligula vitae, pretium enim. In pretium arcu id tellus commodo dapibus. Vestibulum non semper urna. Cras sed facilisis dolor, sit amet efficitur purus.",
      "watched": false,
      "added_by": {
          "id": 12,
          "first_name": "Kiv",
          "last_name": "Benzopyla"
      }
    },
    {
      "id": 11,
      "title": "Batman Beyond",
      "year": 2019,
      "genre": "Action",
      "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus non est in viverra. Pellentesque sit amet leo nulla. Nunc rhoncus mattis porta. Etiam hendrerit blandit dui, et vestibulum justo cursus at. Nam dignissim suscipit mauris nec convallis. Fusce malesuada a enim at aliquet. Aenean euismod mauris justo, at viverra justo tincidunt eget. Nulla placerat sed arcu ac volutpat. Pellentesque nec enim consectetur, fringilla tellus in, egestas mauris. Aenean quis ex eu justo sodales dapibus. Etiam molestie mauris nec malesuada pulvinar. Etiam eget felis dapibus, laoreet ligula vitae, pretium enim. In pretium arcu id tellus commodo dapibus. Vestibulum non semper urna. Cras sed facilisis dolor, sit amet efficitur purus.",
      "watched": false,
      "added_by": {
          "id": 12,
          "first_name": "Kiv",
          "last_name": "Benzopyla"
      }
    }
  ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
