import React, { useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from "@material-ui/core";

const styles = {
  FormControl: {
    width: "100%",
    margin: "20px 0px"
  }
};

const getInitialState = exercise => {
    return exercise
      ? exercise
      : {
          title: "",
          description: "",
          muscles: ""
        };
  };

export default ({ muscles, onSubmit, activeExercise, onClose }) => {
  const [exercise, setExercise] = React.useState(getInitialState(activeExercise));

  // Update selected exercise if we get new activeExercise
  useEffect(() => {
    setExercise(getInitialState(activeExercise))
  }, [activeExercise])

  const handleSubmit = () => {
    // TODO Validation

    onSubmit({
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...exercise
    });

    setExercise(getInitialState());
  };

  const handleChange = name => ({ target: { value } }) => {
    setExercise({ ...exercise, [name]: value });
  };

  return (
    <>
      <form>
        <TextField
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          value={exercise.title}
          onChange={handleChange("title")}
        />
        <FormControl style={styles.FormControl}>
          <InputLabel id="muscles">Muscles</InputLabel>
          <Select
            id="muscles-select"
            value={exercise.muscles}
            onChange={handleChange("muscles")}
          >
            {muscles.map(muscle => (
              <MenuItem key={muscle} value={muscle}>
                {muscle}
              </MenuItem>
            ))}
          </Select>
          <TextField
            multiline
            rows="4"
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={exercise.description}
            onChange={handleChange("description")}
          />
        </FormControl>
        <br />
        <Button
          onClick={() => {
            if (!activeExercise) onClose();
            handleSubmit();
          }}
          color="primary"
        >
          {activeExercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    </>
  );
};
