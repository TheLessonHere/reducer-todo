import React, { useReducer } from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import {
  todoReducer,
  initialState
} from './reducers/todoReducer';

const App = () => {
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  const filterCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: 'FILTER_LIST' });
  }

  const toggleCompleted = (id) => {
    console.log('toggleCompleted', id);
    dispatch({ type: 'TOGGLE_ITEM', payload: id });
  }

  const addTodo = (item) => {
    console.log(item);
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todos}
                  toggleCompleted={toggleCompleted}
        />
        <TodoForm addTodo={addTodo} 
                  filterTodos={filterCompleted} />
      </div>
    );
}

export default App;