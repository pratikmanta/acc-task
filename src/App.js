import React, { useEffect, useState } from 'react';
import './App.css';
import { SelectComponent } from './SelectComponent';

const App = () => {
	const [selected, setSelected] = useState('Select value');
	const [usersList, setUsersList] = useState(null);
	const [userData, setUserData] = useState(null);

	// API call to get users data
	const handleApiCall = () => {
		// timeout to just show data arriving and updating default selected
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((res) => res.json())
				.then((data) => setUsersList(data));
		}, 1000);
	};

	// Api call to get and display user data
	const handleSelect = (event) => {
		const userId = event.target.value;
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((res) => res.json())
			.then((data) => {
				setUserData(data);
			})
			.catch((err) => {
				console.log({ err });
			});
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
		const payload = JSON.stringify(data);

		fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: payload
		})
			.then((response) => {
				alert('Updated data');
				console.log(response);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	useEffect(() => {
		handleApiCall();
	}, []);

	return (
		<div className='App'>
			<h1>React Task</h1>
			<SelectComponent
				handleSelect={handleSelect}
				users={usersList}
				selected={selected}
			/>
			<br />
			<br />
			{userData !== null && userData.id ? (
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
