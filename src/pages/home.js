import React from "react";
import "../style/css/home.css";
import Musical from "../components/home-content-musical";
import GamingLoops from "../components/home-content-gaming-loops";
import Faustgeist from "../components/home-content-faustgeist";

const Home = () => {
	return (
		<div className="home-container">
			<Musical />
			<GamingLoops />
			<Faustgeist />
		</div>
	);
};

export default Home;
