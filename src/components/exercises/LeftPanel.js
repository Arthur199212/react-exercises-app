import React from 'react'
import { Paper } from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    margin: '10px 0',
  }
}

export default () => {
  return (
    <>
      <Paper style={styles.Paper}>
        <h2>Exercises</h2>
      </Paper>
    </>
  )
}
