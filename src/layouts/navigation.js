import React from "react";
import "../style/navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="nav-bar">
			<NavLink to="/" end className="nav-btn">
				Home
			</NavLink>
			<NavLink to="/music" className="nav-btn">
				Music
			</NavLink>
			<NavLink to="/credits" className="nav-btn">
				Credits
			</NavLink>
			<NavLink to="/offer" className="nav-btn">
				Offer
			</NavLink>
			<NavLink to="/contact" className="nav-btn">
				Contact
			</NavLink>
		</nav>
	);
};

export default Navigation;
