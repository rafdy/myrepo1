import React from 'react';
import style from './Title.css';

const Title = props => {
	return (
		<div>
			<h1 className={style.Apptitle}>{props.title}</h1>
			<p className={style.Todos}>{`(${props.todolist.length})`}</p>
		</div>
	);
}

export default Title;
