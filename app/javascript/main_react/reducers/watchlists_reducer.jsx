import { FETCH_WATCHLISTS, ACCEPT_REQUEST } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WATCHLISTS:
      return action.payload
    case ACCEPT_REQUEST:
      return state.concat(action.payload)
    default:
      return state;
  }
}
