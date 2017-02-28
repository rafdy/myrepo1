import React from 'react';

const TodoForm = props => {
	return (
		<div>
			<form onSubmit={event => props.addTodo(event.target.value)}>
					<label htmlFor="searchText">ToDoName:</label>
					<input type="text" name="ToDoName" defaultValue="type ToDo name here"></input>
			</form>
		</div>
	);
}

export default TodoForm;