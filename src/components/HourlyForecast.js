import React from 'react';
import moment from 'moment';
import './HourlyForecast.css';

const HourlyForecast = ({ forecast }) => {
	const renderForecasts = forecast.map(
		(
			{
				apparentTemperature,
				humidity,
				precipProbability,
				summary,
				temperature,
				time
			},
			index
		) => (
			<div key={index} className='hourly'>
				<h3>{moment.unix(time).format('LT')}</h3>
				<p>Temperature: {Math.round(temperature)}</p>
				<p>Feels Like: {Math.round(apparentTemperature)}</p>
				<p>Chance of Percipitation: {precipProbability}</p>
				<p>Humidity: {humidity}</p>
			</div>
		)
	);
	return (
		<div>
			<br />
			<h2>Hourly Forecast</h2>
			{renderForecasts}
		</div>
	);
};
export default HourlyForecast;
