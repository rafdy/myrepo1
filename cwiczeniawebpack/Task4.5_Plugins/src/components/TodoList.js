import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
	return (
		<div>
			{props.tdlist.map(tdelement => <p key={tdelement.id} className="style.Todos" onClick={() => props.onRemove(tdelement.id)}>{tdelement.text}</p>)}
		</div>
	);
}

export default TodoList;
