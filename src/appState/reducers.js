import { GET_ALL_USERS, GET_SINGLE_USER } from './actions';

const INITIAL_STATE = {
	usersList: [],
	userItem: null
};

export const usersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ALL_USERS:
			return {
				...state,
				usersList: action.payload
			};
		case GET_SINGLE_USER:
			return {
				...state,
				userItem: action.payload
			};

		default:
			return state;
	}
};
