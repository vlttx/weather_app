import fetchJsonp from 'fetch-jsonp'
import { stopFetchingData } from './fetchingDataActions'
const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER}/`


const receivedWeatherData = weatherData =>{
  return{
    type: "RECEIVED_WEATHER_DATA",
    weatherData
  }
  }


  export const fetchWeatherData = () => {
    return dispatch => {
      //here it hooks up to the redux thunk
    return navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude} = position.coords
    const site = `${APIURL}${latitude},${longitude}`
    fetchJsonp(site)
      .then(response => response.json())
      .then(weatherData => {
        dispatch(receivedWeatherData(weatherData))
        dispatch(stopFetchingData())
        //you need to add dispatch child actions, otherwise only fetchWeatherData is dipatched
  })
  });

    }

  }