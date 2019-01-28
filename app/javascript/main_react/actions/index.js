export const FETCH_WATCHLISTS = 'FETCH_WATCHLISTS'
export const ADD_MOVIE = 'ADD_MOVIE'
export const SELECT_WATCHLIST = 'SELECT_WATCHLIST'
export const FETCH_MOVIES = 'FETCH_MOVIES'
export const TOGGLE_WATCHED = 'TOGGLE_WATCHED'
export const FETCH_REQUESTS = 'FETCH_REQUESTS'
export const ACCEPT_REQUEST = 'ACCEPT_REQUEST'
export const REMOVE_REQUEST = 'REMOVE_REQUEST'
export const SEND_REQUEST = 'SEND_REQUEST'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'

export function fetchWatchlists(userData) {
  const url = "/api/v1/lists"
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    }
  }).then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_WATCHLISTS,
        payload: data
      }
    })
}

export function addMovie(movieFromSearch, listId, userData) {
  // Fetch genres object
  const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US
  `
  return fetch(genresUrl)
    .then(response => response.json())
    .then((genresData) => {
      const genreObjectsArray = genresData.genres
      console.log('genreObjectsArray', genreObjectsArray)
      // Build movie genre string from genre objects array
      const genreString = movieFromSearch.genre_ids.map((genreId) => {
        return genreObjectsArray.find((genreObj) => genreObj.id == genreId).name
      }).toString().replace(/,/g, ', ');
      console.log('genreString and should be correct', genreString)
      // Add genre string to movieFromSearch
      movieFromSearch.genre = genreString
      console.log('movie to be added', movieFromSearch)
      // Add movie
      const url = `/api/v1/lists/${listId}/movies`
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Email": userData.email,
          "X-User-Token": userData.token
        },
        body: JSON.stringify({ movie: movieFromSearch })
      })
        .then(response => response.json())
        .then((data) => {
          return {
            type: ADD_MOVIE,
            payload: data
          }
        })
    })
}

export function selectWatchlist(watchlist) {
  return {
    type: SELECT_WATCHLIST,
    payload: { watchlist }
  }
}

export function fetchMovies(listId, userData) {
  const url = `/api/v1/lists/${listId}`
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    }
  })
    .then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_MOVIES,
        payload: data
      }
    })
}

export function toggleWatched(movieId, userData) {
  const url = `/api/v1/movies/${movieId}/toggle_watched`
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    }
  })
    .then(response => response.json())
    .then((data) => {
      return {
        type: TOGGLE_WATCHED,
        payload: data
      }
    })
}

export function fetchRequests(userData) {
  const url = "/api/v1/requests"
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    }
  }).then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_REQUESTS,
        payload: data
      }
    })
}

export function acceptRequest(requestId, userData) {
  const url = `/api/v1/requests/${requestId}/accept`
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    }
  }).then(response => response.json())
    .then((data) => {
      return {
        type: ACCEPT_REQUEST,
        payload: data,
        deletedRequestId: requestId
      }
    })
}

export function removeRequest(requestId, userData) {
  const url = `/api/v1/requests/${requestId}`
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    }
  }).then((data) => {
      return {
        type: REMOVE_REQUEST,
        payload: data,
        deletedRequestId: requestId
      }
    })
}

export function sendRequest(receiverEmail, userData) {
  const url = `/api/v1/requests`
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    },
    body: JSON.stringify({ request: {receiver_email: receiverEmail} })
  })
    .then(response => response.json())
    .then((data) => {
      return {
        type: SEND_REQUEST,
        payload: data
      }
    })
}

export function removeMovie(movieId, userData) {
  const url = `/api/v1/movies/${movieId}`
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.token
    }
  }).then((data) => {
      return {
        type: REMOVE_MOVIE,
        payload: data,
        deletedMovieId: movieId
      }
    })
}