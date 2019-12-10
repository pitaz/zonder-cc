import initialState from './initialState';
import * as types from '../actionTypes/people';

const peopleReducer = (state = initialState.people, action) => {
	switch (action.type) {
	case types.PEOPLE_REQUEST:
		return {
			...state,
			loading: true,
		};
	case types.PEOPLE_REQUEST:
		
		return {
			...state,
			error: null,
			loading: false,
			data: action.payload
		};
	case types.PEOPLE_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error,
		};
	default:
		return {
			...state,
		};
	}
};

export default peopleReducer;
