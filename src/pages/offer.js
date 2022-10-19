import React from "react";
import "../style/css/offer.css";
import OfferGameMusic from "../components/offer-game-music";
import OfferFilmMusic from "../components/offer-film-music";
import OfferTheaterMusic from "../components/offer-theater-music";

const Offer = () => {
	return (
		<div>
			<OfferGameMusic />
			<OfferFilmMusic />
			<OfferTheaterMusic />
		</div>
	);
};

export default Offer;
