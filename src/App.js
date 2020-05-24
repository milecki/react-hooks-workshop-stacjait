import React from 'react';
import './App.css';
import Header from './Header';
// import HeaderTeacherSolution from './HeaderTeacherSolution';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import WindowResize from './WindowResize';
import UsersList from './UsersList';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HeaderTeacherSolution /> */}
      <Counter />
      <CounterHooks />
      <WindowResize />
      <UsersList />
    </div>
  );
}

export default App;
