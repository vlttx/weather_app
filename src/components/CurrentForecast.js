import React from 'react';
import moment from 'moment'


const CurrentForecast = ({forecast: {apparentTemperature, humidity, precipProbability, summary, temperature, time}}) =>{
return (<div>
<br/>
<h2>Current Forecast for {moment().format('LL')}</h2>
<div style={{border: 'solid 2px black', padding: '16px', margin: '16px', width:'200px', display:'inline-block'}}>
<h4>{summary}</h4>
	<p>Temperature: {Math.round(temperature)}</p>
	<p>Feels Like: {Math.round(apparentTemperature)}</p>
	<p>Chance of Percipitation: {precipProbability}</p>
	<p>Humidity: {humidity}</p>


</div>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
</div>)
}
export default CurrentForecast;