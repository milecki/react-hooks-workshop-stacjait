import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
// import CounterLAST from './CounterLAST';
import WindowResize from './WindowResize';
import UsersList from './UsersList';

export const UserContext = React.createContext('');
export const CounterContext = React.createContext(0);

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          userEmail: userEmail,
          login: () => setUserEmail('john@example.com'),
        }}
      >
        <CounterContext.Provider
          value={{
            counterValue: counter,
            incrementCounter: () => setCounter(counter + 1),
            decrementCounter: () => setCounter(counter - 1),
            resetCounter: () => setCounter(0),
          }}
        >
          <div>
            {userEmail ? (
              userEmail
            ) : (
              <button onClick={() => setUserEmail('john@example.com')}>
                Zaloguj się
              </button>
            )}
          </div>
          <Header />
          <Counter />
          <CounterHooks />
          <WindowResize />
          <UsersList />
          {/* <CounterLAST /> */}
        </CounterContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
