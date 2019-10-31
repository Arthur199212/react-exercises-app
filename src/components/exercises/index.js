import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";

import Form from "./Form";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: "72vh",
    overflow: "auto"
  }
};

export default ({
  muscles,
  exercises,
  category,
  onSelect,
  exercise,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an example from the list"
  },
  onDelete,
  onEdit,
  editMode,
  handleExerciseEdit
}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper style={styles.Paper}>
            {exercises.map(([group, exercises]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="nav" aria-label="secondary mailbox folders">
                    {exercises.map(({ id, title }) => (
                      <ListItem button key={id} onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="comments"
                            onClick={() => onEdit(id)}
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="comments"
                            onClick={() => onDelete(id)}
                          >
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={styles.Paper}>
            {editMode ? (
              <Form
                muscles={muscles}
                onSubmit={handleExerciseEdit}
                activeExercise={exercise}
              />
            ) : (
              <>
                <Typography variant="h5" gutterBottom>{title}</Typography>
                <Typography variant="subtitle1">{description}</Typography>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
