import { useContext } from "react"
import { WorkoutsContext } from "../context/WorkoutsContext"

export default function useWorkoutsContext() {
	const context = useContext(WorkoutsContext)

	if (!context)
		throw Error(
			"useWorkoutsContext() must be used inside WorkoutContextProvider"
		)

	return context
}
