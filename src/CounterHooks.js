import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return 0;
  }
}

function CounterHooks() {
  const [counterState, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h2>Counter Hooks:</h2>

      <div class="counterValue">{counterState}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default CounterHooks;
