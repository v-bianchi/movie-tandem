import { FETCH_REQUESTS, SEND_REQUEST, REMOVE_REQUEST, ACCEPT_REQUEST } from "../actions"

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_REQUESTS:
      return action.payload
    case SEND_REQUEST:
      if(action.status === 'success') {
        return state.concat(action.payload)
      } else {
        return state
      }
    case REMOVE_REQUEST:
      return state.filter((elt) => elt.id !== action.deletedRequestId)
    case ACCEPT_REQUEST:
      return state.filter((elt) => elt.id !== action.deletedRequestId)
    default:
      return state
  }
}
