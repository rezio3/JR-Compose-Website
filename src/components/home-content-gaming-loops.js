import React from "react";
import secretJungle from "../images/secret_jungle.png";
import Media from "react-media";

const GamingLoops = () => {
	return (
		<div className="gaming-loops-container">
			<img
				src={secretJungle}
				alt="secret_jungle logo"
				className="gaming-loops-img"
			/>

			<div className="gaming-loops-text-content">
				<h2>Gaming Loops</h2>
				<p>
					Over 1,000 loops for your production! Film/Game/Apps music loops with
					wide choice.
					<br />
					Here is my bundle - huge orchestra complied with electronic sounds.
				</p>
				<span className="gaming-loops-shop">
					<a href="https://gamingloops.com/secret-jungle">
						<button>Check out! 🛒</button>
					</a>
				</span>
			</div>
		</div>
	);
};

export default GamingLoops;
