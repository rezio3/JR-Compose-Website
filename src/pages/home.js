import React from "react";
import "../style/css/home.css";
import Musical from "../components/home-content-musical";
import GamingLoops from "../components/home-content-gaming-loops";
import Faustgeist from "../components/home-content-faustgeist";

const Home = () => {
	return (
		<div>
			<h1
				style={{
					margin: "50px 0 10px 20px",
					fontSize: "25px",
					color: "white",
					textTransform: "uppercase",
				}}
			>
				News
			</h1>
			<div className="home-split-line"></div>
			<Musical />
			<div className="home-split-line"></div>
			<GamingLoops />
			<div className="home-split-line"></div>
			<Faustgeist />
		</div>
	);
};

export default Home;
