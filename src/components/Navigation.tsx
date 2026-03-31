import { Link, useLocation } from "react-router-dom";
import { routes } from "../router";
import "./Navigation.css";

export const Navigation = () => {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-brand">
					<h2>📱 My App</h2>
				</div>
				<ul className="nav-links">
					{routes.map((route) => (
						<li key={route.path}>
							<Link
								to={route.path}
								className={`nav-link ${isActive(route.path) ? "active" : ""}`}
							>
								{route.icon} {route.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
