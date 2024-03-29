import React from "react";
import { NavLink } from "react-router-dom";
import "../style/css/navigationInBurgerIcon.css";

const NavigationInBurgerIcon = (props) => {
	return (
		<div className="nav-burger-container">
			<button onClick={props.btnHandle} className="x-btn">
				<i className="fa-solid fa-xmark"></i>
			</button>
			<NavLink
				to="/JR-Compose-Website"
				end
				className="nav-btn-mobile"
				onClick={props.btnHandle}
			>
				Home
			</NavLink>
			<NavLink to="/music" className="nav-btn-mobile" onClick={props.btnHandle}>
				Music
			</NavLink>
			<NavLink to="/offer" className="nav-btn-mobile" onClick={props.btnHandle}>
				Offer
			</NavLink>
			<NavLink
				to="/contact"
				className="nav-btn-mobile"
				onClick={props.btnHandle}
			>
				Contact
			</NavLink>
		</div>
	);
};

export default NavigationInBurgerIcon;
