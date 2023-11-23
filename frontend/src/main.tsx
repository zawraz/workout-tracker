import React from "react"
import ReactDOM from "react-dom/client"
import { WorkoutsContextProvider } from "./context/WorkoutsContext.tsx"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<WorkoutsContextProvider>
			<App />
		</WorkoutsContextProvider>
	</React.StrictMode>
)
