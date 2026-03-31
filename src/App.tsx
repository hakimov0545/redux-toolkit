import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { routes } from "./router";
import "./App.css";

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				))}
			</Routes>
		</Router>
	);
}

export default App;
