import { FETCH_WATCHLISTS } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WATCHLISTS:
      return action.payload
    default:
      return state;
  }
}
