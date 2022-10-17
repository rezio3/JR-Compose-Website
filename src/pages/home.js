import React from "react";
import "../style/pages-style/home.css";
import tiffany from "../images/Tiffany's.jpg";

const Home = () => {
	return (
		<div>
			<div className="musical-container">
				<img
					src={tiffany}
					alt="logo of musical Tiffany's Lunatic Boomerang"
					className="tiffany-img"
				/>
				<div className="musical-text-content">
					<h2>Tiffany's Lunatic Boomerang</h2>
					<p>
						Musical "Tiffany's Lunatic Boomerang" which I've created with music
						producer{" "}
						<a href="https://www.jaime-albadalejo.com/">Jaime Albadalejo </a>
						will be realased soon! It's psychological musical/thriller in
						spanish and english version. Recordings of music orchestrated by my
						self have just started. Stay tuned!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
