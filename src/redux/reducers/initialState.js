const initialStateArr = {
	loading: false,
	data: [],
	error: null,
};

const initialStateObj = {
	loading: false,
	data: {},
	error: null,
};


export default {
	people: {
		...initialStateObj,
	},
};
