import React from 'react'


const CurrentForecast = ({forecast: {apparentTemperature, humidity, precipProbability, summary, temperature, time}}) =>
<div>
<h2>Current Forecast</h2>
<div style = {{ border: 'solid 1px black', padding: '16px', margin: '35px'}}>
<h3>{summary}</h3>
	<p>Current Time: {time}</p>
	<p>Temperature: {temperature}</p>
	<p>Feels Like: {apparentTemperature}</p>
	<p>Chance of Percipitation: {precipProbability}</p>
	<p>Humidity: {humidity}</p>
</div>
</div>

export default CurrentForecast;