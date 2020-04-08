import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todo = [
  {
    task: 'EQ guitar track',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Master track',
    id: Date.now(),
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

  

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
