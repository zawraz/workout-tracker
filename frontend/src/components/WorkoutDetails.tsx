import { Workout } from "../types/types"

type Props = {
	workout: Workout
}

function WorkoutDetails({ workout: { title, load, reps, createdAt } }: Props) {
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
		</div>
	)
}

export default WorkoutDetails
