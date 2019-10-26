import React, { useEffect, useState } from 'react'

import { muscles, exercises } from '../store'
import { Header, Footer } from './layouts'
import Exercises from './exercises'

const getExercisesByGroup = () => {
  return Object.entries(exercises.reduce((exercises, item) => {
    const { muscles } = item

    exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], item]
      : [item]

    return exercises
  }, {}))
}

export default () => {
  const [ exercisesDB, setExercisesData ] = useState([]);

  useEffect(() => {
    setExercisesData(getExercisesByGroup());
  }, [])

  return (
    <>
      <Header />
      
      <Exercises exercisesDB={exercisesDB} />

      <Footer muscles={muscles} />
    </>
  )
}
