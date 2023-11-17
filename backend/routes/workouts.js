const express = require("express")
const Workout = require("../models/Workout")

const router = express.Router()

// GET
router.get("/", (req, res) => {
	res.json({ msg: "GET all workouts" })
})

router.get("/:id", (req, res) => {
	res.json({ msg: "GET a single workout" })
})

// POST
router.post("/", async (req, res) => {
	const { title, reps, load } = req.body
	try {
		const workout = await Workout.create({ title, load, reps })
		res.status(200).json(workout)
	} catch (err) {
		res.status(400).json({ error: err.message })
	}
})

//  DELETE
router.delete("/:id", (req, res) => {
	res.json({ msg: "DELETE an existing workout" })
})

// PATCH
router.patch("/:id", (req, res) => {
	res.json({ msg: "PATCH an existing workout" })
})

module.exports = router
