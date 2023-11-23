import { createContext, useReducer } from "react"

export const WorkoutsContext = createContext(null)

export const workoutsReducer = (state, action) => {
	switch (action.type) {
		case "SET_WORKOUTS":
			return { workouts: action.payload }
		case "CREATE_WORKOUT":
			return { workouts: [action.payload, ...state.workouts] }
		case "DELETE_WORKOUT":
			return {
				workouts: state.workouts.filter(
					(workout) => workout._id !== action.payload._id
				),
			}
		default:
			return state
	}
}

export function WorkoutsContextProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [state, dispatch] = useReducer(workoutsReducer, { workouts: null })
	return (
		<WorkoutsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</WorkoutsContext.Provider>
	)
}
