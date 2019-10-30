import React, { useEffect, useState } from 'react'

import { muscles, exercises } from '../store'
import { Header, Footer } from './layouts'
import Exercises from './exercises'

// const ID_GENERATOR = () => Math.random().toString(36).substr(2, 9)

const getExercisesByGroup = exercises => {
  return Object.entries(exercises.reduce((exercises, item) => {
    const { muscles } = item

    exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], item]
      : [item]

    return exercises
  }, {}))
}

export default () => {
  const [exercisesDB, setExercisesData] = useState([])
  const [category, setCategory] = useState('')
  const [exercise, setExercise] = useState({})

  useEffect(() => {
    setExercisesData(exercises)
  }, [])

  const handleCategorySelect = category => {
    setCategory(category)
  }

  const handleExerciseSelect = id => {
    setExercise(exercisesDB.find(exercise => exercise.id === id))
  }
  
  const onExerciseCreate = exercise => {
    setExercisesData([...exercisesDB, exercise])
  }
  
  const transformedExercises = getExercisesByGroup(exercisesDB)

  return (
    <>
      <Header muscles={muscles} onExerciseCreate={onExerciseCreate}/>

      <Exercises
        exercise={exercise}
        exercises={transformedExercises}
        category={category}
        onSelect={handleExerciseSelect}
      />

      <Footer
        muscles={muscles}
        category={category}
        onSelect={handleCategorySelect}
      />
    </>
  )
}
