import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={text}
        placeholder="Add a new task"
        onChange={event => setText(event.target.value)}
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
