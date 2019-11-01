import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import Context from './context'
import { muscles, exercises } from "../store";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import getExercisesByGroup from './helpers/getExercisesByGroup'

export default () => {
  const [exercisesDB, setExercisesData] = useState([]);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setExercisesData(exercises);
  }, []);

  const handleCategorySelect = category => setCategory(category);

  const handleExerciseSelect = id => {
    setExercise(exercisesDB.find(exercise => exercise.id === id));
    setEditMode(false);
  };

  const onExerciseCreate = exercise =>
    setExercisesData([...exercisesDB, exercise]);

  const handleDeleteCategory = id => {
    setExercisesData(exercisesDB.filter(exercise => id !== exercise.id))
    if (exercise.id === id) {
      setExercise({})
      setEditMode(false);
    }
  }

  const handleEditCategory = id => {
    setExercise(exercisesDB.find(exercise => exercise.id === id));
    setEditMode(true);
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
    exercises: exercisesDB,
    category,
    exercise,
    onExerciseCreate,
    handleExerciseEdit
  })

  return (
    <Context.Provider value={getContext()}>
      <CssBaseline />
      
      <Header />

      <Exercises
        muscles={muscles}
        exercise={exercise}
        exercises={transformedExercises}
        category={category}
        onSelect={handleExerciseSelect}
        onDelete={handleDeleteCategory}
        onEdit={handleEditCategory}
        editMode={editMode}
        onExerciseCreate={onExerciseCreate}
      />

      <Footer
        muscles={muscles}
        category={category}
        onSelect={handleCategorySelect}
      />
    </Context.Provider>
  );
};
