const express = require("express")
const {
	getAllWorkouts,
	getWorkout,
	postWorkout,
	deleteWorkout,
	patchWorkout,
} = require("../controllers/workoutController")

const router = express.Router()

// GET
router.get("/", getAllWorkouts)
router.get("/:id", getWorkout)

// POST
router.post("/", postWorkout)

//  DELETE
router.delete("/:id", deleteWorkout)

// PATCH
router.patch("/:id", patchWorkout)

module.exports = router
