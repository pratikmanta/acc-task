import React from 'react';

export const SelectComponent = ({
	selected,
	users,
	handleSelect
}) => {
	const renderOptions = () => {
		return users.map((user) => {
			return (
				<option key={user.id} value={user.id}>
					{user.name}
				</option>
			);
		});
	};

	return (
		<div>
			<select defaultValue={selected} onChange={handleSelect}>
				{users && users.length > 0 ? (
					renderOptions()
				) : (
					<option value={selected}>{selected}</option>
				)}
			</select>
		</div>
	);
};
