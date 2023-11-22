import { useState, useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"

import { Workout } from "../types/types"
import WorkoutForm from "../components/WorkoutForm"

function Home() {
	const [workouts, setWorkouts] = useState<Workout[] | null>(null)

	useEffect(() => {
		const fetchWorkouts = async () => {
			const res = await fetch("/api/workouts")
			const workouts = await res.json()

			if (res.ok) {
				setWorkouts(workouts)
			}
		}
		fetchWorkouts()
	}, [])

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
