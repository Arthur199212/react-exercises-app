import { SET_EXERCISE, CLEAN_EXERCISE, SELECT_EXERCISE } from '../actions/actionTypes'

export default (state = {}, { type, exercise, exercises, id }) => {
  switch (type) {
    case SET_EXERCISE: {
      return exercise
    }
    case CLEAN_EXERCISE: {
      return {}
    }
    case SELECT_EXERCISE: {
      return exercises.find(exercise => exercise.id === id)
    }
    default:
      return state;
  }
}
