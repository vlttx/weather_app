import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import logo from './logo.svg'
import CurrentForecast from './components/CurrentForecast'
import Navbar from './components/Navbar'





const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER}/`

class App extends Component{
 constructor() {
  super()

  this.state ={
    fetchingData: true,
    //once the fetching of data will be finished, set it to false
    weatherData: {},
    forecastKey: null
  }
 }

 componentDidMount(){
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude} = position.coords
    const site = `${APIURL}${latitude},${longitude}`
    fetchJsonp(site)
  .then(response => response.json())
  .then(weatherData => this.setState({
    fetchingData: false,
    weatherData
  }))
  // });
 });
}

handleForecastChange = forecastKey => this.setState({forecastKey: forecastKey})

  render(){
    const {fetchingData, weatherData, forecastKey } = this.state
    const forecastSpecific = weatherData[forecastKey]
  return (
    <div className="App">
      <header className="App-header">
      <br/>
        <h1>Weather App</h1> 
        <br/>
        <Navbar changeForecast={this.handleForecastChange}/>
        <br></br>   
      </header>
       
      <div>
      {fetchingData ?
        <img src={logo} className="App-logo" alt="logo"/> :<CurrentForecast forecast={weatherData.currently}/>}
       
      </div>
    </div>
  );
}
}

export default App;
