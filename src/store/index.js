  

import {createStore} from 'redux'
import thunk from 'redux-thunk'


const middlewares = [thunk]

  // store = {fetchingData: true,
  //   //once the fetching of data will be finished, set it to false
  //   weatherData: {},
  //   forecastKey: 'currently'
  // }