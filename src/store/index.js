  

import {createStore} from 'redux'
import thunk from 'redux-thunk'
import fetchingData from '../reducers/fetchingDataReducer';
import weatherData from '../reducers/weatherDataReducer';
import route from '../reducers/routeReducer';


const middlewares = [thunk]


export default createStore(
	fetchingData,
	weatherData,
	route,
	applyMiddleware(...middlewares))

  // store = {fetchingData: true,
  //   //once the fetching of data will be finished, set it to false
  //   weatherData: {},
  //   forecastKey: 'currently'
  // }