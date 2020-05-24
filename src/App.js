import React from 'react';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import WindowResize from './WindowResize';

function App() {
  return (
    <div className="App">
      <h1>Blog Michała - warsztat React Hooks</h1>
      <Counter />
      <CounterHooks />
      <WindowResize />
    </div>
  );
}

export default App;
