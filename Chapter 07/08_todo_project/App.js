import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  const filtered = todos.filter(t =>
    filter === 'all'
      ? true
      : filter === 'active'
      ? !t.completed
      : t.completed
  );

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={filtered}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Done</button>
      </div>
    </div>
  );
}

export default App;
