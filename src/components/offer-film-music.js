import React from "react";

const filmMusicPrices = {
	duration: ["< 1min", "1min - 3min", "3min - 6min", "6min - 9min", "9min<"],
	classical: ["90$", "200$", "340$", "540$", "1100$"],
	electronic: ["50$", "140$", "280$", "450$", "900$"],
	hybrid: ["80$", "190$", "310$", "500$", "1000$"],
};

const Duration = (props) => {
	return <th>{props.duration}</th>;
};

const Price = (props) => {
	return <td>{props.price}</td>;
};

const OfferFilmMusic = () => {
	return (
		<div className="second-container">
			<h3 className="film-music-header">Film Music</h3>
			<div className="offer-container">
				<table>
					<thead></thead>
					<tbody>
						<tr>
							<th className="empty-cell"></th>
							{filmMusicPrices.duration.map((e) => (
								<Duration duration={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Classical</td>
							{filmMusicPrices.classical.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Elektronic</td>
							{filmMusicPrices.electronic.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Hybrid</td>
							{filmMusicPrices.hybrid.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OfferFilmMusic;
