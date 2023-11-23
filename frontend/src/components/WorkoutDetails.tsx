import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"
import trashCanIcon from "../assets/trash-can.svg"

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
			<p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
			<span className="icon-container" onClick={handleDelete}>
				<img src={trashCanIcon} alt="A trash can icon" />
			</span>
		</div>
	)
}

export default WorkoutDetails
