export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_SINGLE_USER = 'GET_SINGLE_USER';

export const getAllUsersApi = (dispatch) => {
	try {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => {
				dispatch(getAllUsersAction(data));
			});
	} catch (e) {
		console.log('error');
	}
};

export const getSingleUserApi = (dispatch, userId) => {
	try {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(getSingleUserAction(data));
			});
	} catch (e) {
		console.log('error');
	}
};

export const putSingleUserApi = (userObj) => {
	const { id } = userObj;
	const postBody = JSON.stringify(userObj);
	try {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
			method: 'PUT',
			body: postBody
		})
			.then((res) => console.log(res))
			.then(() => alert('Updated data'));
	} catch (e) {
		console.log('error');
	}
};

export const getAllUsersAction = (payload) => {
	return {
		type: GET_ALL_USERS,
		payload
	};
};

export function getSingleUserAction(payload) {
	return {
		type: GET_SINGLE_USER,
		payload
	};
}
