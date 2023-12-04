import { useEffect } from "react"
import useWorkoutsContext from "../hooks/useWorkoutsContext"
import useAuthContext from "../hooks/useAuthContext"

import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

import { Workout } from "../types/types"

export default function Home() {
	const { workouts, dispatch } = useWorkoutsContext()
	const { user } = useAuthContext()

	useEffect(() => {
		const fetchWorkouts = async () => {
			const res = await fetch("/api/workouts", {
				headers: { Authorization: `Bearer ${user.token}` },
			})
			const workouts = await res.json()

			if (res.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: workouts })
			}
		}

		if (user) {
			fetchWorkouts()
		}
	}, [dispatch, user])

	return (
		<div className="home">
			<div className="workouts">
				{workouts?.map(
					(workout: Workout): JSX.Element => (
						<WorkoutDetails key={workout._id} workout={workout} />
					)
				)}
			</div>
			<WorkoutForm />
		</div>
	)
}
