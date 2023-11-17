require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const workoutRoutes = require("./routes/workouts")
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// routes
app.use("/api/workouts", workoutRoutes)

// DB connection
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`MongoDB connected. Listening on port ${process.env.PORT}...`)
		})
	})
	.catch((err) => console.error(err))
