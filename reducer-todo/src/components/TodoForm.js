import React, { useState } from 'react';

function TodoForm (props){
  const [newtodo, setNewTodo] = useState({value: ''});

  const handleChange = event => {
    setNewTodo({ value: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(newtodo.value);
    setNewTodo({value: ''});
  }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text"
               name="newtodo"
               placeholder="Add a new todo"
               onChange={handleChange}
               value={newtodo.value}
        />
        <button type="submit">Add a new Todo</button>
        <button onClick={props.filterTodos}>Clear Completed</button>
      </form>
    );
}

export default TodoForm;