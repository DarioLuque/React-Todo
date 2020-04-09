import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css'

const todo = [
  {
    task: 'EQ guitar, bass, drums',
    id: 1,
    completed: false
  },
  {
    task: 'Master track',
    id: 2,
    completed: false
  },
  {
    task: 'Export Track',
    id: 3,
    completed: false
  }    
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo
    };
  }

  addItem = (e, item) => {
    console.log('first task: ', this.state.todo);
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTask]
    });
    console.log('second tasks: ', this.state.todo)
  }

  toggleItem = itemId => {

    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
    console.log(this.state.todo)
  }

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
        <h2>TODO LIST</h2>
        <TodoForm addItem={this.addItem} />
        </header>
        <div className="todo-container">
        <TodoList 
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
        </div>
      </div>
    );
  }
}

export default App;
