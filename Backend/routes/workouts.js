const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//get a single workout
router.get("/:id", getSingleWorkout);

//pots a new workout
router.post("/", createWorkout);

//delete a single workout
router.delete("/:id", deleteWorkout);

//update a single workout
router.patch("/:id", updateWorkout);

module.exports = router;
