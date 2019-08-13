import React from 'react';
import Todo from './Todo.js';

function TodoList (props) {

    console.log('TodoList', props);
    return (
      <div>
        {props.todos.map(todo => <Todo key={todo.id}
                                        todo={todo}
                                        toggleCompleted={props.toggleCompleted}
                                      />)}
      </div>
    );
}

export default TodoList;