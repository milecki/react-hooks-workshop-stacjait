import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import WindowResize from './WindowResize';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <CounterHooks />
      <WindowResize />
    </div>
  );
}

export default App;
