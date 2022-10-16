import React, { Component } from "react";
import "../style/navigationMobile.css";
import NavigationInBurgerIcon from "../components/navigationInBurgerIcon";

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
			<nav className="nav-bar">
				{this.state.isBurgerIconActive ? (
					<button onClick={this.handleBurgerActive}>KLIKNIJ</button>
				) : (
					<button className="burger-icon" onClick={this.handleBurgerActive}>
						<i className="fa-solid fa-bars"></i>
					</button>
				)}
				{this.state.isBurgerIconActive ? (
					<NavigationInBurgerIcon state={this.state.isBurgerIconActive} />
				) : null}
			</nav>
		);
	}
}

export default NavigationMobile;
