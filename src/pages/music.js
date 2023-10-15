import React from "react";
import "../style/css/music.css";
import kuama from "../audio/Kuama.mp3";
import extinction from "../audio/Extinction_Paradigm.mp3";
import jungle from "../audio/Thick_Jungle.mp3";
import abiogenesis from "../audio/Abiogenesis.mp3";
import escape from "../audio/Escape.mp3";
import westworld from "../audio/westworld.mp3";
import lupo1 from "../audio/lupo1.mp3";
import teddyBear from "../audio/teddy_bear.mp3";

const Music = () => {
	return (
		<div className="music-list-container">
			<ul>
				<li>
					<label>
						2.<span>Kuama</span>
					</label>
					<a href="https://www.youtube.com/watch?v=VPKFAvVE_K4">
						Click here to listen in high quality
					</a>
					<audio src={kuama} controls />
				</li>
				<li>
					<label>
						3.<span>Extinction Paradigm</span>
					</label>
					<a href="https://soundcloud.com/jakub-rezler-883804903/in-iron-we-trust-preludium-ost?si=bb95b4d343db42398873062d585f82a5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						Click here to listen in high quality
					</a>
					<audio src={extinction} controls />
				</li>
				<li>
					<label>
						4.<span>Thick Jungle</span>
					</label>
					<a href="https://soundcloud.com/jakub-rezler-883804903/thick-jungle?si=31eb9e40b573474cba53fdde71d2af43&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						Click here to listen in high quality
					</a>
					<audio src={jungle} controls />
				</li>
				<li>
					<label>
						5.<span>Abiogenesis</span>
					</label>
					<a href="https://soundcloud.com/jakub-rezler-883804903/abiogenesis?si=6bfa3d9428f048ff80763202e10f9be7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						Click here to listen in high quality
					</a>
					<audio src={abiogenesis} controls />
				</li>
				<li>
					<label>
						6.<span>Escape</span>
					</label>
					<a href="https://soundcloud.com/jakub-rezler-883804903/escape-short-film-jakub-rezler-bifsc-2020?si=d6ab76e08b674473b16f76c8746d5b11&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						Click here to listen in high quality
					</a>
					<audio src={escape} controls />
				</li>
				<li>
					<label>
						7.<span>Westworld - Spitfire</span>
					</label>
					<a href="https://soundcloud.com/jakub-rezler-883804903/westworld-spitfire-audio-hbo-competition?si=f5bcfeb60a5844d1908c7c8997bb43f8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						Click here to listen in high quality
					</a>
					<audio src={westworld} controls />
				</li>
				<li>
					<label>
						8.<span>Lupo 1</span>
					</label>
					<a href="https://soundcloud.com/jakub-rezler-883804903/lupo?si=4fe2bde77c69434b9ecd1b733b4a98fa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						Click here to listen in high quality
					</a>
					<audio src={lupo1} controls />
				</li>
				<li>
					<label>
						9.<span>Teddy Bear</span>
					</label>
					<a href="https://soundcloud.com/jakub-rezler-883804903/little-bear?si=7e86ae5f7d8e4817aa2da878be6d1755&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
						Click here to listen in high quality
					</a>
					<audio src={teddyBear} controls />
				</li>
			</ul>
		</div>
	);
};

export default Music;
