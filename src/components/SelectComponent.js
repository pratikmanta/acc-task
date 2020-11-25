import React from 'react';
import { useSelector } from 'react-redux';

export const SelectComponent = ({ handleSelect }) => {
	const usersList = useSelector(
		(state) => state.usersReducer.usersList
	);

	const renderOptions = () => {
		return usersList.map((user) => {
			return (
				<option key={user.id} value={user.id}>
					{user.name}
				</option>
			);
		});
	};

	return (
		<div>
			<select defaultValue={'Select value'} onChange={handleSelect}>
				{usersList && usersList.length > 0 ? renderOptions() : null}
			</select>
		</div>
	);
};
