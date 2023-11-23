import { useState } from "react"

function WorkoutForm() {
	const [title, setTitle] = useState("")
	const [load, setLoad] = useState("")
	const [reps, setReps] = useState("")
	const [error, setError] = useState(null)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const workout = { title, load, reps }

		const res = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: { "Content-Type": "application/json" },
		})

		const data = await res.json()

		if (!res.ok) {
			setError(data.error)
		}
		if (res.ok) {
			setTitle("")
			setLoad("")
			setReps("")

			setError(null)
			console.log("A new workout has been added to MongoDB.")
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
			/>
			<label htmlFor="">Load [kg]:</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>
			<label htmlFor="">Reps:</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>
			<button>Add</button>
			{error && <div className="error">{error}</div>}
		</form>
	)
}

export default WorkoutForm
