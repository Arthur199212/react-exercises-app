import React, { Fragment, useContext } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Delete, Edit } from "@material-ui/icons";

import Form from "./Form";
import Context from "../context";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: "calc(100% - 10px)",
    overflow: "auto",
  },
  MainContainer: {
    height: "calc(100% - 64px - 48px)",
  },
  MainContainerSmall: {
    height: "calc(100% - 106px)",
  },
  Item: {
    height: "50%",
  },
};

export default () => {
  const {
    exercises,
    category,
    onSelectExercise: onSelect,
    exercise,
    exercise: {
      title = "Welcome!",
      description = "Please select an example from the list",
    },
    onDelete,
    onEdit,
    editMode,
  } = useContext(Context);

  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );

  return (
    <>
      <Grid
        container
        style={matches ? styles.MainContainer : styles.MainContainerSmall}
      >
        <Grid item xs={12} sm={6} style={!matches ? styles.Item : null}>
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
        <Grid item xs={12} sm={6} style={!matches ? styles.Item : null}>
          <Paper style={styles.Paper}>
            {editMode ? (
              <Form
                activeExercise={exercise} // For clarifying that we don't want to create but edit
              />
            ) : (
              <>
                <Typography variant="h5" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="subtitle1">{description}</Typography>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
