import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js'

const TodoList = props => {
	return (
		<div>
			{props.tdlist.map(tdelement => <Todo key={tdelement.id} id={tdelement.id} className="style.Todos" tdel={tdelement.text} removeTodo={props.removeTodo}></Todo>)}
		</div>
	);
}

export default TodoList;
