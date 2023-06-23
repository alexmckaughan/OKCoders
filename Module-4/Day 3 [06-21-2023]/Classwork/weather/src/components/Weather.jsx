import { useEffect, useState } from "react";

const key = 'YOUR_API_KEY'; // Replace with your WeatherAPI key

const Weather = () => {
    const [zipCode, setZipCode] = useState(74145);
    const [forecastDat, setForecastData] = useState([])
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${zipCode}&days=1&aqi=no&alerts=no`;

    const getForecast = async () => {
        const res = await fetch(url);
        const { forecast } = await res.json();
        console.log(forecast.forecastday);
        setForecastData = 
    };

    useEffect(() => {
        getForecast();
    }, []);

    return (
        <>
            <label htmlFor="zipcode">Zip Code</label>
            <input
                name="zipcode"
                type="text"
                placeholder="zipcode"
                value={zipCode}
                onChange={(e) => {
                    setZipCode(e.target.value);
                }}
                style={{ width: '100%' }}
            />
        </>
        { forecaseData.map((data) => <div></div>) }
    );
};

export default Weather;
