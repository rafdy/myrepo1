import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm1.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: 'todo1',
                    id: 1
                }
            ]
        };
    }
    
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>        
                <Title title='Aplikacja TODO' />
                <TodoForm addTodo={() => this.addTodo()} />
                <TodoList tdlist={this.state.data} removeTodo={() => this.removeTodo()} />
            </div>
        );
    }
}

export default App;
