import React, { Fragment, useContext } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

import Context from "../context";

const Listing = () => {
  const {
    exercises,
    category,
    onSelectExercise: onSelect,
    onDelete,
    onEdit,
  } = useContext(Context);

  return (
    <>
      {exercises.map(([group, exercises]) =>
        (!category || category === group) && (
          <Fragment key={group}>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
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
        )
      )}
    </>
  );
};

export default Listing;
