import React from 'react';
import moment from 'moment'


const CurrentForecast = ({forecast: {apparentTemperature, humidity, precipProbability, summary, temperature, time}}) =>
<div>
<h2>Current Forecast for {moment().format('LL')}</h2>
<div>
<h3>{summary}</h3>
	<p>Temperature: {Math.round(temperature)}</p>
	<p>Feels Like: {Math.round(apparentTemperature)}</p>
	<p>Chance of Percipitation: {precipProbability}</p>
	<p>Humidity: {humidity}</p>
</div>
</div>

export default CurrentForecast;