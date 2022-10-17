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
			<div className="icons-container-navigation">
				<a href="https://soundcloud.com/jakub-rezler-883804903">
					<i className="fa-brands fa-soundcloud"></i>
				</a>
				<a href="https://www.youtube.com/user/Reziok3">
					<i className="fa-brands fa-youtube"></i>
				</a>
				<a href="https://www.linkedin.com/in/jakub-rezler-7b08211ab">
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a href="https://twitter.com/Jakub_Rezler">
					<i className="fa-brands fa-twitter"></i>
				</a>
				<a href="https://open.spotify.com/artist/7poqdc8Z8CksjZhleR5fbK?si=JUumspV_TGeaKHzgn6wLgg">
					<i className="fa-brands fa-spotify"></i>
				</a>
			</div>
		</nav>
	);
};

export default NavigationDesktop;
