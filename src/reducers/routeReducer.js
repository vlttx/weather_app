const initialState = {routeName: 'currently'}


export default (state = initialState, action) => {
	switch(action.type){
		case 'CHANGING_ROUTE':
		return Object.assign({}, state, {routeName: action.routeName})
		default:
		return state;
	}
};