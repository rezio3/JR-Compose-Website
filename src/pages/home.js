import React from "react";
import "../style/pages-style/home.css";
import Musical from "../components/home-content-musical";

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
		</div>
	);
};

export default Home;
