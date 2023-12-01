import useAuthContext from "../hooks/useAuthContext"
import useWorkoutsContext from "../hooks/useWorkoutsContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import trashCanIcon from "../assets/trash-can.svg"

import { Workout } from "../types/types"

type Props = {
	workout: Workout
}

function WorkoutDetails({
	workout: { title, load, reps, createdAt, _id },
}: Props) {
	const { user } = useAuthContext()
	const { dispatch } = useWorkoutsContext()

	const handleDelete = async () => {
		if (!user) return

		const res = await fetch(`/api/workouts/${_id}`, {
			method: "DELETE",
			headers: { Authorization: `Bearer ${user.token}` },
		})
		const workoutData = await res.json()

		if (res.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: workoutData })
		}
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
