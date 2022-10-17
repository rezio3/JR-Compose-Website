import React, { Component } from "react";
import "../style/css/navigationMobile.css";
import NavigationInBurgerIcon from "../components/navigationInBurgerIcon";
import trebleClef from "../images/cleff.png";
import Media from "react-media";

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
				<div className="jrcompose-logo-container-mobile">
					<Media query="(min-width: 550px)">
						{(matches) => {
							return (
								matches && (
									<img
										src={trebleClef}
										alt="treble-clef"
										className="treble-clef-img"
									/>
								)
							);
						}}
					</Media>

					<span className="jrcompose-span">
						JR <br />
						Compose
					</span>
				</div>
				<div className="icons-container-mobile-navigation">
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
