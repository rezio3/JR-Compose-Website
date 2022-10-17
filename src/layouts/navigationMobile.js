import React, { Component } from "react";
import "../style/css/navigationMobile.css";
import NavigationInBurgerIcon from "../components/navigationInBurgerIcon";
import trebleClef from "../images/cleff.png";

class NavigationMobile extends Component {
	state = {
		isBurgerIconActive: false,
	};

	handleBurgerActive = () => {
		const burgerIcon = document.querySelector(".burger-icon");
		if (this.state.isBurgerIconActive === false) {
			burgerIcon.classList.add("deactive");
		}
		this.setState({
			isBurgerIconActive: !this.state.isBurgerIconActive,
		});
	};

	render() {
		return (
			<nav className="nav-bar-mobile">
				<div className="jrcompose-logo-container">
					<img src={trebleClef} alt="treble-clef" className="treble-clef-img" />
					<span className="jrcompose-span">JR Compose</span>
				</div>
				{this.state.isBurgerIconActive ? null : (
					<button className="burger-icon" onClick={this.handleBurgerActive}>
						<i className="fa-solid fa-bars"></i>
					</button>
				)}
				{this.state.isBurgerIconActive ? (
					<NavigationInBurgerIcon
						state={this.state.isBurgerIconActive}
						btnHandle={this.handleBurgerActive}
					/>
				) : null}
			</nav>
		);
	}
}

export default NavigationMobile;
