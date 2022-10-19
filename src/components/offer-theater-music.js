import React from "react";

const theaterMusicPrices = {
	duration: ["< 1min", "1min - 3min", "3min - 6min", "6min - 9min", "9min<"],
	classical: ["85$", "190$", "320$", "510$", "1050$"],
	electronic: ["40$", "120$", "250$", "430$", "880$"],
	hybrid: ["70$", "175$", "300$", "470$", "950$"],
};

const Duration = (props) => {
	return <th>{props.duration}</th>;
};

const Price = (props) => {
	return <td>{props.price}</td>;
};

const OfferTheaterMusic = () => {
	return (
		<div className="third-container">
			<h3 className="theatre-music-header">Theater Music</h3>
			<div className="offer-container">
				<table>
					<thead></thead>
					<tbody>
						<tr>
							<th className="empty-cell"></th>
							{theaterMusicPrices.duration.map((e) => (
								<Duration duration={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Classical</td>
							{theaterMusicPrices.classical.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Elektronic</td>
							{theaterMusicPrices.electronic.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Hybrid</td>
							{theaterMusicPrices.hybrid.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OfferTheaterMusic;
