import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'

import Context from '../context'
import { Form } from './'

const Preview = () => {
  const {
    exercise,
    exercise: { title, description },
    editMode,
  } = useContext(Context)

  return (
    <>
      {editMode ? (
        <Form
          activeExercise={exercise} // For clarifying that we don't want to create but edit
        />
      ) : (
        <>
          <Typography variant='h5' gutterBottom>
            {title || 'Welcome!'}
          </Typography>
          <Typography variant='subtitle1'>
            {description || 'Please select an exercise from the list'}
          </Typography>
        </>
      )}
    </>
  )
}

export default Preview