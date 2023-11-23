import { useWorkoutsContext } from "../hooks/useWorkoutContext"

import { Workout } from "../types/types"

type Props = {
	workout: Workout
}

function WorkoutDetails({
	workout: { title, load, reps, createdAt, _id },
}: Props) {
	const { dispatch } = useWorkoutsContext()

	const handleDelete = async () => {
		const res = await fetch(`/api/workouts/${_id}`, { method: "DELETE" })
		const workoutData = await res.json()

		if (res.ok) {
		}
		dispatch({ type: "DELETE_WORKOUT", payload: workoutData })
	}

	return (
		<div className="workout-details">
			<h3>{title}</h3>
			<p>
				<strong>Load: </strong>
				{load} kg
			</p>
			<p>
				<strong>Reps: </strong>
				{reps}
			</p>
			<p>{createdAt}</p>
			<span onClick={handleDelete}>delete</span>
		</div>
	)
}

export default WorkoutDetails
