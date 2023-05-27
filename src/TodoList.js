import './TodoList.css';
import TodoForm from './TodoForm';
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
  
    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    };
    const toggleTodo = (id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          })
        );
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }; 

 return (
  <div className="todo-list">
  <h2>Todo List</h2>
  <TodoForm addTodo={addTodo} className="todo-form" />
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        className={`todo-item ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
</div>
  );
};  

export default TodoList;
