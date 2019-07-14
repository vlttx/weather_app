  

import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import fetchingData from '../reducers/fetchingDataReducer';
import weatherData from '../reducers/weatherDataReducer';
import route from '../reducers/routeReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [thunk]
const reducers = combineReducers({fetchingData,
	weatherData,
	route
});


export default createStore(
	reducers,
	composeEnhancer(applyMiddleware(thunk)),
	)

  
