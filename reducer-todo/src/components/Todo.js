    
import React from 'react';
import './Todo.css';

function Todo (props) {

    console.log(props.todo);
    return (
      <div
        onClick={() => props.toggleCompleted(props.todo.id)}
        className={props.todo.completed ? "completed" : ""}>
        {props.todo.item}
      </div>
    );
}

export default Todo;