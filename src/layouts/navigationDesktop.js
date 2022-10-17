import React from "react";
import { NavLink } from "react-router-dom";
import "../style/css/navigationDesktop.css";
import trebleClef from "../images/cleff.png";

const NavigationDesktop = () => {
	return (
		<nav className="nav-bar-desktop">
			<div className="jrcompose-logo-container">
				<img src={trebleClef} alt="treble-clef" className="treble-clef-img" />
				<span className="jrcompose-span">JR Compose</span>
			</div>
			<div className="desktop-nav-links">
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
			</div>
		</nav>
	);
};

export default NavigationDesktop;
