import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles = {
  Paper: {
    padding: 20,
    margin: '10px 0',
    height: '72vh',
    overflow: 'auto',
  }
}

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an example from the list',
  },
}) => {
  return (
    <>
      <Grid container>
        <Grid item sm>

          <Paper style={styles.Paper}>
            {exercises.map(([group, exercises]) =>
              !category || category === group
                ? <Fragment key={group}>
                  <Typography
                    variant='h6'
                    style={{ textTransform: 'capitalize' }}
                  >
                    {group}
                  </Typography>
                  <List component="nav" aria-label="secondary mailbox folders">

                    {exercises.map(({ id, title }) => (
                      <ListItem
                        button
                        key={id}
                        onClick={() => onSelect(id)}
                      >
                        <ListItemText
                          primary={title}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
                : null
            )}
          </Paper>

        </Grid>
        <Grid item sm>

          <Paper style={styles.Paper}>
            <Typography
              variant="h5"
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
            >
              {description}
            </Typography>
          </Paper>

        </Grid>
      </Grid>
    </>
  )
}
