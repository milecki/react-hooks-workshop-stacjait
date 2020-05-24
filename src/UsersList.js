import React, { useReducer, useEffect } from 'react';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false,
};

function usersReducer(state, action) {
  switch (action.type) {
    case 'USERS_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'USERS_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'USERS_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        data: [...action.data],
      };
  }
}

function UsersList() {
  const [usersState, dispatch] = useReducer(usersReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: 'USERS_LOADING' });
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) =>
        setTimeout(() => {
          dispatch({ type: 'USERS_SUCCESS', data: json });
        }, 3000)
      )
      .catch((err) => {
        dispatch({ type: 'USERS_ERROR' });
      });
  }, []);

  const renderUsers = () =>
    usersState.data.map((user) => <div>{user.name}</div>);

  return (
    <>
      <h2>Użytkownicy</h2>
      {usersState.isLoading && <div> Ładowanie danych</div>}
      {renderUsers()}
      {usersState.isError && <div>Błąd pobierania danych</div>}
    </>
  );
}

export default UsersList;
