import React from "react";
import "../style/css/offer.css";
import OfferGameMusic from "../components/offer-game-music";
import OfferFilmMusic from "../components/offer-film-music";
import OfferTheaterMusic from "../components/offer-theater-music";
import { NavLink } from "react-router-dom";

const Offer = () => {
	return (
		<div className="order-container">
			<OfferGameMusic />
			<NavLink to="/contact" className="nav-btn-desktop">
				<button className="order-btn">Order</button>
			</NavLink>
			<OfferFilmMusic />
			<NavLink to="/contact" className="nav-btn-desktop">
				<button className="order-btn">Order</button>
			</NavLink>
			<OfferTheaterMusic />
			<NavLink to="/contact" className="nav-btn-desktop">
				<button className="order-btn">Order</button>
			</NavLink>
		</div>
	);
};

export default Offer;
