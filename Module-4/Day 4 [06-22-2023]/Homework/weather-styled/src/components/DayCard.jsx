import { useEffect, useRef, useState } from 'react';
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
	const [showTilt, setShowTilt] = useState(true);

	return (
		<Tilt>
			<div className="totally-centered">
				<div>{locationName}</div><br></br>
				<div>{date}</div><br></br>
				<img alt="the daily condition" src={conditionImageUrl} />
				<div>{condition}</div><br></br>
				<div>H: {highTemp}° L: {lowTemp}°</div>
			</div>
		</Tilt>
	)
}

export default DayCard;
