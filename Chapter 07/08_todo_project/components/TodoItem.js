import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? 'done' : ''}>
      <span onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>×</button>
    </li>
  );
}

export default TodoItem;
