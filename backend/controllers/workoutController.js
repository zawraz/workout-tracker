const Workout = require("../models/Workout")
const mongoose = require("mongoose")

// GET all workouts
const getAllWorkouts = async (req, res) => {
	const allWorkouts = await Workout.find({}).sort({ createdAt: -1 })

	res.status(200).json(allWorkouts)
}

// GET a single workout
const getWorkout = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: `An id: ${id} is not a valid id.` })
	}

	const workout = await Workout.findById(id)
	if (!workout) {
		return res
			.status(404)
			.json({ error: `Cannot find workout with an id: ${id}.` })
	}

	res.status(200).json(workout)
}

// POST a single workout
const postWorkout = async (req, res) => {
	const { title, reps, load } = req.body

	let emptyFields = []

	if (!title) {
		emptyFields.push("title")
	}
	if (!load) {
		emptyFields.push("load")
	}
	if (!reps) {
		emptyFields.push("reps")
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: `Please fill in all the fields`, emptyFields })
	}

	try {
		const user_id = req.user._id
		const workout = await Workout.create({ title, load, reps, user_id })
		res.status(200).json(workout)
	} catch (err) {
		res.status(400).json({ error: err.message })
	}
}

// DELETE a single workout
const deleteWorkout = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: `An id: ${id} is not a valid id.` })
	}

	const workout = await Workout.findOneAndDelete({ _id: id })
	if (!workout) {
		return res
			.status(404)
			.json({ error: `Cannot find workout with an id: ${id}.` })
	}

	res.status(200).json(workout)
}

// PATCH a single workout
const patchWorkout = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: `An id: ${id} is not a valid id.` })
	}

	const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
	if (!workout) {
		return res
			.status(404)
			.json({ error: `Cannot find workout with an id: ${id}.` })
	}

	res.status(200).json(workout)
}

module.exports = {
	getAllWorkouts,
	getWorkout,
	postWorkout,
	deleteWorkout,
	patchWorkout,
}
