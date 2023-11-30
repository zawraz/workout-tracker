import { useState } from "react"
import useAuthContext from "./useAuthContext"

export default function useRegister() {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const { dispatch } = useAuthContext()

	const register = async (email, password) => {
		setIsLoading(true)
		setError(null)

		const res = await fetch("/api/user/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		})
		const data = await res.json()

		if (!res.ok) {
			setIsLoading(false)
			setError(data.error)
		}
		if (res.ok) {
			localStorage.setItem("user", JSON.stringify(data))
			dispatch({ type: "LOGIN", payload: data })
			setIsLoading(false)
		}
	}

	return { register, isLoading, error }
}
