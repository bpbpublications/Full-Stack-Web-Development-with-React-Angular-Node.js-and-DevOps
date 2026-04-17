// Example useState snippet from Chapter 9 explanation
import { useState } from 'react';

function ExampleState() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>Current value: {value}</p>
    </div>
  );
}

export default ExampleState;
