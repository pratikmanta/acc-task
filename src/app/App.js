import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectComponent } from '../components/SelectComponent';
import {
	getAllUsersApi,
	getSingleUserApi,
	putSingleUserApi
} from '../appState/actions';
import './App.css';

const App = () => {
	const dispatch = useDispatch();

	const [userData, setUserData] = useState(null);

	const userItem = useSelector(
		(state) => state.usersReducer.userItem
	);

	// Api call to get and display user data
	const handleSelect = (event) => {
		const userId = event.target.value;
		getSingleUserApi(dispatch, userId);
	};

	const handleEmailChange = (event) => {
		const { value } = event.target;
		setUserData((prevState) => ({
			...prevState,
			email: value
		}));
	};

	const handleCompanyChange = (event) => {
		const { value } = event.target;
		setUserData((prevState) => ({
			...prevState,
			company: {
				...prevState.company,
				name: value
			}
		}));
	};

	// Post handler check in console for status
	const handlePostData = (data) => {
		putSingleUserApi(data);
	};

	useEffect(() => {
		getAllUsersApi(dispatch);
		if (userItem && userItem.id) {
			setUserData(userItem);
		}
	}, [userItem, dispatch]);

	return (
		<div className='App'>
			<h1>React Task</h1>
			<SelectComponent handleSelect={handleSelect} />
			<br />
			<br />
			{userData !== null ? (
				<>
					<div className='input-box'>
						<label htmlFor='email'>Email</label>
						<input
							name='email'
							type='text'
							id='email'
							onChange={handleEmailChange}
							value={userData.email}
						/>
					</div>
					<div className='input-box'>
						<label htmlFor='company'>Company</label>
						<input
							name='name'
							type='text'
							id='company'
							value={userData.company.name}
							onChange={handleCompanyChange}
						/>
					</div>
					<button onClick={() => handlePostData(userData)}>
						Save
					</button>
				</>
			) : null}
		</div>
	);
};

export default App;
