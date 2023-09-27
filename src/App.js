import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ResetButton from './components/ResetButton';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed, completedAt: new Date() };
      }
      return todo;
    });

    const completedTodos = updatedTodos.filter((todo) => todo.completed);
    const activeTodos = updatedTodos.filter((todo) => !todo.completed);
    completedTodos.sort((a, b) => b.completedAt - a.completedAt);

    setTodos([...activeTodos, ...completedTodos]);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  // Handle browser refresh by storing the todos in local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever todos change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <h1>TODO App</h1>
      <ResetButton resetTodos={resetTodos} />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
