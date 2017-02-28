import React from 'react';

const TodoForm = props => {
	const handleSubmit = (event) => {
		event.preventDefault();
		props.submitForm(props.todoValue);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
					<label>Todo name: </label>
					<input
						value={props.todoValue}
						onChange={props.changeInput}
						type="text"/>
			</form>
		</div>
	);
}

export default TodoForm;