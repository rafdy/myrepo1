import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoFormPresentation from '../components/TodoForm.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    text: 'clean room'
                }, 
                {
                    id: 2,
                    text: 'wash the dishes'
                }, 
                {
                    id: 3,
                    text: 'feed my cat'
                }],
            todoValue: ''
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data,
            todoValue: ''
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    onTodoFormPresentationChange(event) {
        this.setState({
            todoValue: event.target.value
        });
    }

    render() {
    return (
        <div className="style.TodoApp">        
            <Title title='Aplikacja TODO' />
            <TodoFormPresentation
                submitForm={value => this.addTodo(value)}
                todoValue={this.state.todoValue}
                changeInput={event => this.onTodoFormPresentationChange(event)}
            />
            <TodoList tdlist={this.state.data} removeTodo={() => this.removeTodo()} />
        </div>
        );
    }
}

export default App;
