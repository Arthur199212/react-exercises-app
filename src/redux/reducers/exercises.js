import {
  SET_EXERCISES,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  EDIT_EXERCISE
} from '../actions/actionTypes'

export default (state = [], { type, exercises, exercise, id }) => {
  switch (type) {
    case SET_EXERCISES: {
      return exercises
    }
    case ADD_EXERCISE: {
      return [...state, exercise]
    }
    case DELETE_EXERCISE: {
      return state.filter(exercise => id !== exercise.id)
    }
    case EDIT_EXERCISE: {
      return [
        ...state.filter(({ id }) => id !== exercise.id),
        exercise
      ]
    }
    default:
      return state
  }
}
