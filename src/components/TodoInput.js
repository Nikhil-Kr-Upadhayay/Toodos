import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new TODO..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default TodoInput;
