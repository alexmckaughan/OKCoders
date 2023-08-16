import { useEffect, useState } from 'react';
import DayCard from './DayCard';

const weatherApiKey = '31bdbe407fbd4891ac4183953221705';

const Weather = () => {
	const [zipCode, setZipCode] = useState("");
	const [days, setDays] = useState(1);
	const [forecastData, setForecastData] = useState([]);
	const [location, setLocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getForecast = async () => {
		setIsLoading(true);
		console.log('Fetching data...');
		const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${zipCode}&days=${days}&aqi=no&alerts=no`;

		const res = await fetch(url);
		const { forecast, location } = await res.json();
		console.log('Location fetched:', location);
		console.log('Forecast fetched:', forecast);
		setForecastData(forecast.forecastday);
		setLocation(location);
		setIsLoading(false);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		getForecast();
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="weather-form">
				<label htmlFor="zipCode">Zip Code</label>
				<input
					name="zipCode"
					type="number"
					placeholder="Enter your Zip Code"
					value={zipCode}
					onChange={e => setZipCode(e.target.value)}
				/>
				<label htmlFor="days">Days</label>
				<input
					name="days"
					type="number"
					placeholder="How many days out?"
					value={days}
					onChange={e => setDays(e.target.value)}
				/>
				<button type='submit'>SUBMIT</button>
			</form>
			{zipCode &&
				<div className="daycard-container">
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
				</div>
			}
		</>
	);
};


export default Weather;
