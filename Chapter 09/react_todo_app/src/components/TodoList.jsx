import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onRemove }) {
  if (todos.length === 0) {
    return <p>No tasks yet. Add your first todo.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
