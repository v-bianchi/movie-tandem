import { FETCH_MOVIES } from '../actions'
import { TOGGLE_WATCHED } from '../actions'
import { ADD_MOVIE } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload.movies;
      case TOGGLE_WATCHED:
        return state.filter((elt) => elt.id !== action.payload.id).concat(action.payload);
      case ADD_MOVIE:
        return state.concat(action.payload);
      default:
      return state;
  }
}
