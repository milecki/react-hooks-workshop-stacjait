import React, { useState } from 'react';
import './App.css';
import Header from './Header';
// import HeaderTeacherSolution from './HeaderTeacherSolution';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import WindowResize from './WindowResize';
import UsersList from './UsersList';

export const UserContext = React.createContext('');

function App() {
  const [userEmail, setUserEmail] = useState('');
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          userEmail: userEmail,
          login: () => setUserEmail('john@example.com'),
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
        {/* <HeaderTeacherSolution /> */}
        <Counter />
        <CounterHooks />
        <WindowResize />
        <UsersList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
