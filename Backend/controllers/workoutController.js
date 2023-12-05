const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

//get all workouts

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with the ID ${id}`);
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No workout found" });
  }

  res.status(200).json(workout);
};

//pots a new workout

const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  //add doc to db
  try {
    const workout = await Workout.create({ title, reps, weight });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a single workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with the ID ${id}`);
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "No workout found" });
  }

  res.status(200).json(workout);
};

//update a single workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with the ID ${id}`);
  }

  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    {
      new: true,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "No workout found" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  createWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
