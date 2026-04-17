import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Read Chapter 9', completed: false },
    { id: 2, text: 'Build the React Todo app', completed: true }
  ]);

  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false }
    ]);
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      />
    </div>
  );
}

export default App;
