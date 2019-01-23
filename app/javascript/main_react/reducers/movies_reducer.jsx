import { FETCH_MOVIES, TOGGLE_WATCHED, ADD_MOVIE } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload.movies;
    case TOGGLE_WATCHED:
      return state.filter((elt) => elt.id !== action.payload.id)
                  .concat(action.payload)
                  .sort((a, b) => { return Date.parse(a.created_at) - Date.parse(b.created_at) });
    case ADD_MOVIE:
      return state.concat(action.payload);
    default:
    return state;
  }
}
