import React, { useContext } from 'react';
import { CounterContext } from './App';

function CounterHooks() {
  const {
    counterValue,
    incrementCounter,
    decrementCounter,
    resetCounter,
  } = useContext(CounterContext);

  return (
    <div>
      <h2>Counter Hooks:</h2>
      <div class="counterValue">{counterValue}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={resetCounter}>reset</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}

export default CounterHooks;
