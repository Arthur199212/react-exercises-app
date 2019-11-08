import { SET_CATEGORY } from '../actions/actionTypes'

export default (state = '', { type, category }) => {
  switch (type) {
    case SET_CATEGORY: {
      return category
    }
    default:
      return state
  }
}
