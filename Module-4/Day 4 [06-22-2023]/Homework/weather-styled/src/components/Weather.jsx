import { useEffect, useState } from 'react';
import DayCard from './DayCard';

const weatherApiKey = '31bdbe407fbd4891ac4183953221705';

const Weather = () => {
	const [zipCode, setZipCode] = useState(74145);
	const [forecastData, setForecastData] = useState([]);
	const [location, setLocation] = useState(null);
	const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${zipCode}&days=7&aqi=no&alerts=no`;
	const [isLoading, setIsLoading] = useState(true);

	const getForecast = async () => {
		setIsLoading(true);
		console.log('Fetching data...');

		const res = await fetch(url);
		const { forecast, location } = await res.json();
		console.log('Location fetched:', location);
		console.log('Forecast fetched:', forecast);
		setForecastData(forecast.forecastday);
		setLocation(location);
		setIsLoading(false);
	};

	useEffect(() => {
		getForecast();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<label htmlFor="zipCode">Zip Code</label>
			<input
				name="zipCode"
				type="number"
				placeholder="Enter your Zip Code"
				value={zipCode}
				onChange={e => setZipCode(e.target.value)}
				style={{
					width: '100%',
				}}
			/>
			<button type='submit'>Submit</button>
			{forecastData.map(({ date, day: { condition, maxtemp_f, mintemp_f } }, index) => (
				<DayCard
					key={date + index}
					locationName={location.name}
					date={date}
					conditionImageUrl={condition.icon}
					condition={condition.text}
					highTemp={maxtemp_f}
					lowTemp={mintemp_f}
				/>
			))}

		</>
	);
};

export default Weather;
