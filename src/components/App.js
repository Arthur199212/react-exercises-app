import React, { useEffect, useState } from "react";
import Context from './context'

import { useSelector, useDispatch } from "react-redux";
import { modOn, modOff } from '../redux/actions'

import { muscles, exercises } from "../store"; // TODO put fetch into useEffect()
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from "./layouts";
import { Viewer } from "./exercises";
import getExercisesByGroup from './helpers/getExercisesByGroup'

const App = () => {
  const [exercisesDB, setExercisesData] = useState([]);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  // const [editMode, setEditMode] = useState(false);

  const editMode = useSelector(({ editMode: { status } }) => status);
  const dispatch = useDispatch();

  useEffect(() => {
    setExercisesData(exercises);
  }, []);

  const handleCategorySelect = category => setCategory(category);

  const handleExerciseSelect = id => {
    setExercise(exercisesDB.find(exercise => exercise.id === id));
    // setEditMode(false);
    dispatch(modOff())
  };

  const onExerciseCreate = exercise =>
    setExercisesData([...exercisesDB, exercise]);

  const handleDeleteCategory = id => {
    setExercisesData(exercisesDB.filter(exercise => id !== exercise.id))
    if (exercise.id === id) {
      setExercise({})
      // setEditMode(false);
      dispatch(modOff())
    }
  }

  const handleEditCategory = id => {
    setExercise(exercisesDB.find(exercise => exercise.id === id));
    // setEditMode(true);
    dispatch(modOn())
  };

  const handleExerciseEdit = exercise => {
    setExercisesData([
      ...exercisesDB.filter(ex => ex.id !== exercise.id),
      exercise
    ])
    setExercise(exercise)
  };

  const transformedExercises = getExercisesByGroup(exercisesDB, muscles);

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
  );
};

export default App
