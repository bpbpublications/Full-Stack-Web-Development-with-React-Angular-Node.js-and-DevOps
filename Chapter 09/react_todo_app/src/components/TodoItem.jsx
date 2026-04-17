import React from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div className="todo-item">
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="delete-button"
        type="button"
        onClick={() => onRemove(todo.id)}
      >
        ×
      </button>
    </div>
  );
}

export default TodoItem;
