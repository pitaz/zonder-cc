import * as types from '../actionTypes/people';
import axios from '../../config/axios';

const peopleRequest = () => ({
	type: types.PEOPLE_REQUEST,
});

const peopleSuccess= (payload) => ({
	type: types.PEOPLE_SUCCESS,
	payload,
});

const peopleFailure= (error) => ({
	type: types.PEOPLE_FAILURE,
	error,
});

const fetchPeople = (url) => async dispatch => {
	try {
		dispatch(peopleRequest());
    const request = await axios.get(`/${url}`);
		return dispatch(peopleSuccess(request.data));
	} catch (error) {
		return dispatch(peopleFailure(error));
	}
};

export {fetchPeople};
