import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import { muscles, exercises } from "../store";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";

const getExercisesByGroup = exercises => {
  const initialExercises = muscles.reduce(
    (exercises, category) => ({
      ...exercises,
      [category]: []
    }),
    {}
  );

  return Object.entries(
    exercises.reduce((exercises, item) => {
      const { muscles } = item;

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], item]
        : [item];

      return exercises;
    }, initialExercises)
  );
};

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

  const transformedExercises = getExercisesByGroup(exercisesDB);

  return (
    <>
      <CssBaseline />
      
      <Header muscles={muscles} onExerciseCreate={onExerciseCreate} />

      <Exercises
        muscles={muscles}
        exercise={exercise}
        exercises={transformedExercises}
        category={category}
        onSelect={handleExerciseSelect}
        onDelete={handleDeleteCategory}
        onEdit={handleEditCategory}
        handleExerciseEdit={handleExerciseEdit}
        editMode={editMode}
        onExerciseCreate={onExerciseCreate}
      />

      <Footer
        muscles={muscles}
        category={category}
        onSelect={handleCategorySelect}
      />
    </>
  );
};
