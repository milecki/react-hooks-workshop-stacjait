import React, { useState } from 'react';

function CounterHooks() {
  const initialValue = 10;
  const [counterValue, setCounterValue] = useState(initialValue);

  const incrementCounter = () => {
    setCounterValue(counterValue + 1);
  };

  const decrementCounter = () => {
    setCounterValue(counterValue - 1);
  };

  const resetCounter = () => {
    setCounterValue(initialValue);
  };

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
