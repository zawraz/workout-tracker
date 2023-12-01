import { useState } from "react"
import useAuthContext from "../hooks/useAuthContext"
import useWorkoutsContext from "../hooks/useWorkoutsContext"

export default function WorkoutForm() {
	const { user } = useAuthContext()
	const { dispatch } = useWorkoutsContext()
	const [title, setTitle] = useState("")
	const [load, setLoad] = useState("")
	const [reps, setReps] = useState("")
	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!user) {
			setError("You must be logged in.")
			return
		}

		const workout = { title, load, reps }

		const res = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		})

		const workoutData = await res.json()

		if (!res.ok) {
			setError(workoutData.error)
			setEmptyFields(workoutData.emptyFields)
		}
		if (res.ok) {
			setTitle("")
			setLoad("")
			setReps("")

			setError(null)
			console.log("A new workout has been added to MongoDB.")
			dispatch({ type: "CREATE_WORKOUT", payload: workoutData })
		}
	}
	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a new workout</h3>
			<label htmlFor="">Exercise title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className={emptyFields.includes("title") ? "error" : ""}
			/>
			<label htmlFor="">Load [kg]:</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
				className={emptyFields.includes("load") ? "error" : ""}
			/>
			<label htmlFor="">Reps:</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
				className={emptyFields.includes("reps") ? "error" : ""}
			/>
			<button>Add</button>
			{error && <div className="error">{error}</div>}
		</form>
	)
}
