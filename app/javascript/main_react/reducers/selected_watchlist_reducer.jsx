import { SELECT_WATCHLIST } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_WATCHLIST:
      return action.payload.watchlist
    default:
      return state
  }
}
