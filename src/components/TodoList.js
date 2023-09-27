import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ todos, completeTodo }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="todo-list">
      {activeTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} completeTodo={completeTodo} />
      ))}
      {completedTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} completeTodo={completeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
