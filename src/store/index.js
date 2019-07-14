  

import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import fetchingData from '../reducers/fetchingDataReducer';
import weatherData from '../reducers/weatherDataReducer';
import route from '../reducers/routeReducer';


const middlewares = [thunk]
const reducers = combineReducers({fetchingData,
	weatherData,
	route})


export default createStore(
	reducers,
	applyMiddleware(...middlewares))

  // store = {fetchingData: true,
  //   //once the fetching of data will be finished, set it to false
  //   weatherData: {},
  //   forecastKey: 'currently'
  // }