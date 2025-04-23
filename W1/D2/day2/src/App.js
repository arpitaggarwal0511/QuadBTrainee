import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className="App">
      <h1>React Training - Day 2</h1>

      <section>
        <h2>useState Hook (Counter)</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </section>

      <section>
        <h2>Event Handling</h2>
        <button onClick={handleClick}>Click Me</button>
      </section>

      <section>
        <h2>Controlled Form</h2>
        <form onSubmit={handleFormSubmit}>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
        {submittedName && <p>Submitted Name: {submittedName}</p>}
      </section>
    </div>
  );
}

export default App;
