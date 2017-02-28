import React from 'react';

const Todo = props => {
	return (
		<div>
			<p onClick={() => props.removeTodo(props.id)}>{props.tdel}</p>
		</div>
	);
}

export default Todo;


