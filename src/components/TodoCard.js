import React from 'react';

function TodoCard({ todo, completeTodo }) {
  const handleComplete = () => {
    completeTodo(todo.id);
  };

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleComplete}
      />
      <span>{todo.text}</span>
    </div>
  );
}

export default TodoCard;
