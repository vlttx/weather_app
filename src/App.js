import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './App.css';
import logo from './logo.svg';
import CurrentForecast from './components/CurrentForecast';
import Navbar from './components/Navbar';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import { changeRoute } from './actions/routeActions';
import { stopFetchingData } from './actions/fetchingDataActions';
import { fetchWeatherData } from './actions/weatherDataActions';

// const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER}/`
// moved this link to weatherDataActions where we fetch data

class App extends Component{

  componentDidMount(){
    this.props.fetchWeatherData();
  }
 

// handleForecastChange = forecastKey => this.setState({forecastKey: forecastKey})
handleRouteChange = routeName => this.props.changeRoute({routeName: routeName})

  render(){
    // const {weatherData} = this.state
    // console.log(weatherData)
    const { weatherData, fetchingData, routeName } = this.props
    //grabbing the route name and fetchingData value out of props
    const forecastSpecific = weatherData[routeName]
  return (
    <div className="App">
      <header className="App-header">
      <br/>
        <h1>Weather App</h1> 
        <br/>
        <Navbar changeRoute={this.handleRouteChange}/>
        <br></br>   
      </header>
       
      
      {fetchingData ?
        <img src={logo} className="App-logo" alt="logo"/> :
        <div>
        {routeName ==='currently' && <CurrentForecast forecast={forecastSpecific}/>}
        {routeName === 'hourly' && <HourlyForecast forecast={forecastSpecific.data}/>}
        {routeName === 'daily' && <DailyForecast forecast={forecastSpecific.data}/>}
        </div>
    }
    </div>
  );
}
}

export default connect(
  state => ({
    fetchingData: state.fetchingData,
    routeName: state.route.routeName,
    weatherData: state.weatherData
  }), {
    changeRoute, 
    stopFetchingData, 
    fetchWeatherData, }
    )(App);


 //   navigator.geolocation.getCurrentPosition(position => {
  //   const { latitude, longitude} = position.coords
  //   const site = `${APIURL}${latitude},${longitude}`
  //   fetchJsonp(site)
  //     .then(response => response.json())
  //     .then(weatherData => {
  //       this.setState({
  //       weatherData
  // })
  // setTimeout(() => {this.props.stopFetchingData()}, 2000)
  // })
  // });

  //   }
// all this code from ComponentDidMount  moved to weatherDataActions where we dont need to set state



 // constructor() {
 //  super()

 //  this.state ={
    // fetchingData: true,
    //once the fetching of data will be finished, set it to false
    // weatherData: {},
    // forecastKey: 'currently'
 // }
