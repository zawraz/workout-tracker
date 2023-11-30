import React from "react"
import ReactDOM from "react-dom/client"
import { WorkoutsContextProvider } from "./context/WorkoutsContext.tsx"
import { AuthContextProvider } from "./context/AuthContext.tsx"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthContextProvider>
			<WorkoutsContextProvider>
				<App />
			</WorkoutsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
)
