import React, { useEffect } from "react"
import Context from './context'
import { useSelector, useDispatch } from "react-redux"
import {
  modOn,
  modOff,
  setExercise,
  cleanExercise,
  selectExercise,
  setCategory,
  setMuscles,
  setExercises,
  addExercise,
  deleteExercise,
  editExercise
} from '../redux/actions'
import CssBaseline from '@material-ui/core/CssBaseline'

import { musclesDB, exercisesDB } from "../store"
import { Header, Footer } from "./layouts"
import { Viewer } from "./exercises"
import getExercisesByGroup from './helpers/getExercisesByGroup'

const App = () => {
  const exercises = useSelector(({ exercises }) => exercises)
  const muscles = useSelector(({ muscles }) => muscles)
  const category = useSelector(({ category }) => category)
  const exercise = useSelector(({ exercise }) => exercise)
  const editMode = useSelector(({ editMode }) => editMode)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setExercises(exercisesDB))
    dispatch(setMuscles(musclesDB))
  }, [])

  const handleCategorySelect = category => dispatch(setCategory(category))

  const handleExerciseSelect = id => {
    dispatch(selectExercise({ exercises, id }))
    dispatch(modOff())
  }

  const onExerciseCreate = exercise =>
    dispatch(addExercise(exercise))

  const handleDeleteCategory = id => {
    dispatch(deleteExercise(id))

    if (exercise.id === id) {
      dispatch(cleanExercise())
      dispatch(modOff())
    }
  }

  const handleEditCategory = id => {
    dispatch(selectExercise({ exercises, id }))
    dispatch(modOn())
  }

  const handleExerciseEdit = exercise => {
    dispatch(editExercise(exercise))
    dispatch(setExercise(exercise))
  }

  const transformedExercises = getExercisesByGroup(exercises, muscles)

  const getContext = () => ({
    muscles,
    exercises: transformedExercises,
    category,
    exercise,
    onExerciseCreate,
    handleExerciseEdit,
    onSelectExercise: handleExerciseSelect,
    onSelectCategory: handleCategorySelect,
    onDelete: handleDeleteCategory,
    onEdit: handleEditCategory,
    editMode
  })

  return (
    <Context.Provider value={getContext()}>
      <CssBaseline />

      <Header />

      <Viewer />

      <Footer />
    </Context.Provider>
  )
}

export default App
