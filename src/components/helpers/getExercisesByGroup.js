export default (exercises, muscles) => {
  const initialExercises = muscles.reduce(
    (exercises, category) => ({
      ...exercises,
      [category]: [],
    }),
    {}
  );

  return Object.entries(
    exercises.reduce((exercises, item) => {
      const { muscles } = item;

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], item]
        : [item];

      return exercises;
    }, initialExercises)
  );
};
