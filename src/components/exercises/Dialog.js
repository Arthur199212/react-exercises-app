import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import Form from "./Form";
import Context from '../context'

const styles = {
  Icon: {
    color: "#FFF"
  }
};

export default () => {
  const [open, setOpen] = React.useState(false);

  const { muscles, onExerciseCreate } = useContext(Context);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <Icon fontSize="large" style={styles.Icon}>
          add_circle
        </Icon>
      </Button>

      <Dialog
        aria-labelledby="form-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>

          <Form
            muscles={muscles}
            onSubmit={onExerciseCreate}
            onClose={handleClose}
          />
          
        </DialogContent>
      </Dialog>
    </div>
  );
};
