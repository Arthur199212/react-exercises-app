import { SET_MUSCLES } from '../actions/actionTypes'

export default (state = [], { type, muscles }) => {
  switch (type) {
    case SET_MUSCLES: {
      return muscles
    }
    default:
      return state
  }
}
