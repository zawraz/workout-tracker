const express = require("express")
const {
	getAllWorkouts,
	getWorkout,
	postWorkout,
	deleteWorkout,
	patchWorkout,
} = require("../controllers/workoutController")
const authProvider = require("../middleware/authProvider")

const router = express.Router()
router.use(authProvider)

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
