import React from "react";
import "../style/css/music.css";
import lupo2 from "../audio/Lupo2.mp3";
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
						1.<span>Lupo 2</span>
					</label>

					<audio src={lupo2} controls />
				</li>
				<li>
					<label>
						2.<span>Kuama</span>
					</label>

					<audio src={kuama} controls />
				</li>
				<li>
					<label>
						3.<span>Extinction Paradigm</span>
					</label>

					<audio src={extinction} controls />
				</li>
				<li>
					<label>
						4.<span>Thick Jungle</span>
					</label>

					<audio src={jungle} controls />
				</li>
				<li>
					<label>
						5.<span>Abiogenesis</span>
					</label>

					<audio src={abiogenesis} controls />
				</li>
				<li>
					<label>
						6.<span>Escape</span>
					</label>

					<audio src={escape} controls />
				</li>
				<li>
					<label>
						7.<span>Westworld - Spitfire</span>
					</label>

					<audio src={westworld} controls />
				</li>
				<li>
					<label>
						8.<span>Lupo 1</span>
					</label>

					<audio src={lupo1} controls />
				</li>
				<li>
					<label>
						9.<span>Teddy Bear</span>
					</label>

					<audio src={teddyBear} controls />
				</li>
			</ul>
		</div>
	);
};

export default Music;
