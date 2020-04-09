// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div>
      <div className="todo-body">
      {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      </div>
      
      <div className="btn-container">
      <button className="btn-completed" onClick={props.clearCompleted}>
        Clear Completed
      </button>
      </div>
    </div>
  );
};

export default TodoList;
