import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1,
      };
    case 'DECREMENT':
      return {
        value: state.value - 1,
      };
    case 'RESET':
      return {
        value: 0,
      };
    default:
      return {
        value: 0,
      };
  }
}

function CounterHooks() {
  const [counterState, dispatch] = useReducer(counterReducer, { value: 0 });

  return (
    <div>
      <h2>Counter Hooks:</h2>

      <div class="counterValue">{counterState.value}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default CounterHooks;
