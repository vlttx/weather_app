import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import logo from './logo.svg'




const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER}/`

class App extends Component{
 constructor() {
  super()

  this.state ={
    fetchingData: true,
    //once the fetching of data will be finished, set it to false
    weatherData: {}
  }
 }

 componentDidMount(){
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude} = position.coords
    const site = `${APIURL}${latitude},${longitude}`
    fetchJsonp(site)
  .then(response => response.json())
  .then(forecast => console.log(forecast))
  // });
 })
}

  render(){
    const {fetchingData } = this.state
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>    
      </header>
      <p>
      {fetchingData ?
        <img src={logo} className="App-logo" alt="logo"/> : <h2>Data was received</h2>}
      </p>
    </div>
  );
}
}

export default App;
