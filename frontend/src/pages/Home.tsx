import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { Workout } from "../types/types"

function Home() {
	const { workouts, dispatch } = useWorkoutsContext()

	useEffect(() => {
		const fetchWorkouts = async () => {
			const res = await fetch("/api/workouts")
			const workouts = await res.json()

			if (res.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: workouts })
			}
		}
		fetchWorkouts()
	}, [dispatch])

	return (
		<div className="home">
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => (
						<WorkoutDetails key={workout._id} workout={workout} />
					))}
			</div>
			<WorkoutForm />
		</div>
	)
}

export default Home
