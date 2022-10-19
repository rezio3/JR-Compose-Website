import React from "react";
import "../style/css/offer.css";
import OfferGameMusic from "../components/offer-game-music";

const Offer = () => {
	return (
		<div>
			<OfferGameMusic />
			<div class="second-container">
				<h3 class="film-music-header">Muzyka do filmu</h3>
				<div class="offer-container">
					<table>
						<tr>
							<th class="empty-cell"></th>
							<th>&lt; 1min</th>
							<th>1min - 3min</th>
							<th>3min - 6min</th>
							<th>6min - 9min</th>
							<th>9min&lt;</th>
						</tr>
						<tr>
							<td>Klasyczna/Orkiestrowa</td>
							<td>400zł</td>
							<td>900zł</td>
							<td>1650zł</td>
							<td>2800zł</td>
							<td>Do uzgodnienia</td>
						</tr>
						<tr>
							<td>Elektroniczna</td>
							<td>250zł</td>
							<td>750zł</td>
							<td>1400zł</td>
							<td>2400zł</td>
							<td>Do uzgodnienia</td>
						</tr>
						<tr>
							<td>Hybrydowa</td>
							<td>350zł</td>
							<td>800zł</td>
							<td>1500zł</td>
							<td>2550zł</td>
							<td>Do uzgodnienia</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="third-container">
				<h3 class="theatre-music-header">Muzyka do teatru</h3>
				<div class="offer-container">
					<table>
						<tr>
							<th class="empty-cell"></th>
							<th>&lt; 1min</th>
							<th>1min - 3min</th>
							<th>3min - 6min</th>
							<th>6min - 9min</th>
							<th>9min&lt;</th>
						</tr>
						<tr>
							<td>Klasyczna/Orkiestrowa</td>
							<td>400zł</td>
							<td>900zł</td>
							<td>1650zł</td>
							<td>2800zł</td>
							<td>Do uzgodnienia</td>
						</tr>
						<tr>
							<td>Elektroniczna</td>
							<td>250zł</td>
							<td>750zł</td>
							<td>1400zł</td>
							<td>2400zł</td>
							<td>Do uzgodnienia</td>
						</tr>
						<tr>
							<td>Hybrydowa</td>
							<td>350zł</td>
							<td>800zł</td>
							<td>1500zł</td>
							<td>2550zł</td>
							<td>Do uzgodnienia</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Offer;
