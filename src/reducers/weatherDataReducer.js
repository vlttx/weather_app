export default (state = {}, action) => {
	switch(action.type){

		case "RECEIVED_WEATHER_DATA":
		return action.weatherData;
		default:
		return state;
	}
};