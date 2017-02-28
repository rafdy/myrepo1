import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ''
		}
	}
	
	handleSubmit(event) {
		event.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: ''
		});
	}

	handleInputChange(event) {
		this.setState({
			todo: event.target.value
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={event => this.handleSubmit(event)}>
						<label>Todo name:</label>
						<input 
							type="text"
							placeholder="type todo name here"
							onChange={event => this.handleInputChange(event)}
							value={this.state.todo} />
				</form>
			</div>
		);
	}
}

export default TodoForm;