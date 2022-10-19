import React from "react";

const gameMusicPrices = {
	duration: ["< 1min", "1min - 3min", "3min - 6min", "6min - 9min", "9min<"],
	classical: ["80$", "180$", "300$", "500$", "1000$"],
	electronic: ["40$", "120$", "250$", "400$", "800$"],
	hybrid: ["60$", "160$", "270$", "450$", "900$"],
};

const Duration = (props) => {
	return <th>{props.duration}</th>;
};

const Price = (props) => {
	return <td>{props.price}</td>;
};

const OfferGameMusic = () => {
	return (
		<div className="first-container">
			<h3 className="game-music-header">Game Music</h3>
			<div className="offer-container">
				<table>
					<thead></thead>
					<tbody>
						<tr>
							<th className="empty-cell"></th>
							{gameMusicPrices.duration.map((e) => (
								<Duration duration={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Classical</td>
							{gameMusicPrices.classical.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Elektronic</td>
							{gameMusicPrices.electronic.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
						<tr>
							<td>Hybrid</td>
							{gameMusicPrices.hybrid.map((e) => (
								<Price price={e} key={e} />
							))}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OfferGameMusic;
