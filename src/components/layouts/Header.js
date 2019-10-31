import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import CreateDialog from '../exercises/Dialog'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default ({ muscles, onExerciseCreate }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Exercises Database
          </Typography>

          <CreateDialog
            muscles={muscles}
            onCreate={onExerciseCreate}
          />

        </Toolbar>
      </AppBar>
    </div>
  );
}