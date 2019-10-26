import React from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles = {
  Paper: {
    padding: 20,
    margin: '10px 0',
    height: '70vh',
    overflow: 'auto',
  }
}

export default ({ exercisesDB }) => {
  return (
    <>
      <Grid container>
        <Grid sm>

          <Paper style={styles.Paper}>
            {exercisesDB.map(([muscles, exercises]) => (
              <>
                <Typography
                  variant='headline'
                  style={{ textTransform: 'capitalize' }}
                >
                  {muscles}
                </Typography>
                <List component="nav" aria-label="secondary mailbox folders">
                  
                    {exercises.map(item => (
                      <ListItem>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                </List>
              </>
            ))}
          </Paper>

        </Grid>
        <Grid sm>

          <Paper style={styles.Paper}>
          <Typography
            variant="h5"
          >
            Welcome!
          </Typography>
          <Typography
            variant="subtitle1"
          >
            Please select an example from the list
          </Typography>
          </Paper>

        </Grid>
      </Grid>
    </>
  )
}
