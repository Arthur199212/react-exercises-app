import { combineReducers } from 'redux'
import editMode from './editMode'
import exercise from './exercise'
import category from './category'
import muscles from './muscles'
import exercises from './exercises'

export default combineReducers({
  editMode,
  exercise,
  category,
  muscles,
  exercises
})
