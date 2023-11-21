// [
// 	{
// 		_id: "6557893778195fe460ff4d6b",
// 		title: "Situps",
// 		reps: 8,
// 		load: 51,
// 		createdAt: "2023-11-17T15:39:35.469Z",
// 		updatedAt: "2023-11-17T15:39:35.469Z",
// 		__v: 0,
// 	},
// ]
import { Workout } from "../types/types"

const WorkoutDetails = ({ workout }: Workout) => {
	return (
		<div className="workout-details">
			<h3>{workout.title}</h3>
			<p>
				<strong>Load: </strong>
				{workout.load} kg
			</p>
			<p>
				<strong>Reps: </strong>
				{workout.reps}
			</p>
			<p>{workout.createdAt}</p>
		</div>
	)
}

export default WorkoutDetails
