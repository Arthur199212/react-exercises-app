import React, { useEffect, useState } from "react";

import { muscles, exercises } from "../store";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";

const getExercisesByGroup = exercises => {
  const initialExercises = muscles.reduce((exercises, category) => ({
    ...exercises,
    [category]: []
  }), {});

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

  useEffect(() => {
    setExercisesData(exercises);
  }, []);

  const handleCategorySelect = category => {
    setCategory(category);
  };

  const handleExerciseSelect = id => {
    setExercise(exercisesDB.find(exercise => exercise.id === id));
  };

  const onExerciseCreate = exercise => {
    setExercisesData([...exercisesDB, exercise]);
  };

  const handleDeleteCategory = id => {
    setExercisesData(exercisesDB.filter(exercise => id !== exercise.id));
  };

  const transformedExercises = getExercisesByGroup(exercisesDB);

  return (
    <>
      <Header muscles={muscles} onExerciseCreate={onExerciseCreate} />

      <Exercises
        exercise={exercise}
        exercises={transformedExercises}
        category={category}
        onSelect={handleExerciseSelect}
        onDelete={handleDeleteCategory}
      />

      <Footer
        muscles={muscles}
        category={category}
        onSelect={handleCategorySelect}
      />
    </>
  );
};
