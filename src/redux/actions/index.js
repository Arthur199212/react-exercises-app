import {
  MOD_ON,
  MOD_OFF,
  SET_EXERCISE,
  CLEAN_EXERCISE,
  SELECT_EXERCISE,
  SET_CATEGORY,
  SET_MUSCLES,
  SET_EXERCISES,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  EDIT_EXERCISE
} from './actionTypes'

export const modOn = () => ({
  type: MOD_ON
})

export const modOff = () => ({
  type: MOD_OFF
})

export const setExercise = exercise => ({
  type: SET_EXERCISE,
  exercise
})

export const cleanExercise = () => ({
  type: CLEAN_EXERCISE
})

export const selectExercise = ({ exercises, id }) => ({
  type: SELECT_EXERCISE,
  exercises,
  id
})

export const setCategory = category => ({
  type: SET_CATEGORY,
  category
})

export const setMuscles = muscles => ({
  type: SET_MUSCLES,
  muscles
})

export const setExercises = exercises => ({
  type: SET_EXERCISES,
  exercises
})

export const addExercise = exercise => ({
  type: ADD_EXERCISE,
  exercise
})

export const deleteExercise = id => ({
  type: DELETE_EXERCISE,
  id
})

export const editExercise = exercise => ({
  type: EDIT_EXERCISE,
  exercise
})
