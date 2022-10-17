import React from "react";
import faustgeistImg from "../images/fg.jpg";
import faustgeistAudio from "../audio/Faustgeist_Segment_0.mp3";

const Faustgeist = () => {
	return (
		<div className="faustgeist-container">
			<img
				src={faustgeistImg}
				alt="Faustgeist logo"
				className="faustgeist-img"
			/>

			<div className="faustgeist-text-content">
				<h2>Faustgeist OST</h2>
				<p>
					Faustgeist is RPG game based on post-apo fantastic world. The story
					takes place in about 2,500 years after World War III which was
					initiated by robots. We play as five characters trying to rebuild
					former world according to manuscript's scraps, old shattered books and
					legends. Music Faustgeist will welcome us in menu of the game.
				</p>
				<audio src={faustgeistAudio} controls />
			</div>
		</div>
	);
};

export default Faustgeist;
