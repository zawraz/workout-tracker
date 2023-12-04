import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import useAuthContext from "./hooks/useAuthContext"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"

function App() {
	const { user } = useAuthContext()

	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						/>
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/" />}
						/>
						<Route
							path="/register"
							element={!user ? <Register /> : <Navigate to="/" />}
						/>
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App

// TODO:
// 1. user accounts
// 2. login page (keycloak?)
// 3. authentication
