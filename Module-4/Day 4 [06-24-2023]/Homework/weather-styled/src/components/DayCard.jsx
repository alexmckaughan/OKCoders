import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../index.css';

function Tilt({ children }) {
	const tiltRef = useRef();

	useEffect(() => {
		const tiltNode = tiltRef.current;
		const vanillaTiltOptions = {
			max: 25,
			speed: 400,
			glare: true,
			"max-glare": 0.25,
		};
		setTimeout(() => {
			if (tiltNode) {
				VanillaTilt.init(tiltNode, vanillaTiltOptions);
				return () => {
					tiltNode.vanillaTilt.destroy();
				};
			}
		}, 0);
	}, []);



	return (
		<div className="tilt-parent">
			<div ref={tiltRef} className="tilt-root">
				<div className="tilt-child">{children}</div>
			</div>
		</div>
	);
}

function DayCard({ locationName, date, conditionImageUrl, condition, highTemp, lowTemp }) {

	return (
		<Tilt>
			<div className="totally-centered">
				<h1>{locationName}</h1><br></br>
				<h2>{date}</h2><br></br>
				<img alt="daily condition icon" src={conditionImageUrl} />
				<div>{condition}</div><br></br>
				<div>H: {highTemp}° L: {lowTemp}°</div>
			</div>
		</Tilt>
	)
}

export default DayCard;
