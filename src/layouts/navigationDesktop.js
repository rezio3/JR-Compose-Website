import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navigationDesktop.css";

const NavigationDesktop = () => {
	return (
		<nav className="nav-bar">
			<NavLink to="/" end className="nav-btn-desktop">
				Home
			</NavLink>
			<NavLink to="/music" className="nav-btn-desktop">
				Music
			</NavLink>
			<NavLink to="/credits" className="nav-btn-desktop">
				Credits
			</NavLink>
			<NavLink to="/offer" className="nav-btn-desktop">
				Offer
			</NavLink>
			<NavLink to="/contact" className="nav-btn-desktop">
				Contact
			</NavLink>
		</nav>
	);
};

export default NavigationDesktop;
