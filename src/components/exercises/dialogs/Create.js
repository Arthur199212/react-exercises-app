import React from 'react';
import {
  Button, TextField, Dialog, DialogActions, Select,
  DialogContent, DialogContentText, DialogTitle, MenuItem,
  FormControl, InputLabel
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const styles = {
  FormControl: {
    width: '100%',
    margin: '20px 0px',
  },
  Icon: {
    color: '#FFF',
  }
}

export default ({ muscles, onCreate }) => {
  const [open, setOpen] = React.useState(false);
  const [exercise, setExercise] = React.useState({ id: '', title: '', description: '', muscles: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = name => ({ target: { value } }) => {
    setExercise({ ...exercise, [name]: value })
  }

  const handleSubmit = () => {
    // TODO Validation

    onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })
    setExercise({
      id: '',
      title: '',
      description: '',
      muscles: ''
    })
  }

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
        <DialogTitle id="form-dialog-title">
          Create a new exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below
          </DialogContentText>
          <form>
            <TextField
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={exercise.title}
              onChange={handleChange('title')}
            />
            <FormControl style={styles.FormControl}>
              <InputLabel id="muscles">Muscles</InputLabel>
              <Select
                id="muscles-select"
                value={exercise.muscles}
                onChange={handleChange('muscles')}
              >
                {muscles.map(muscle =>
                  <MenuItem key={muscle} value={muscle}>{muscle}</MenuItem>
                )}
              </Select>
              <TextField
                multiline
                rows='4'
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                value={exercise.description}
                onChange={handleChange('description')}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose()
              handleSubmit()
            }}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}