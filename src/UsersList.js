import React, { useState, useEffect } from 'react';

function UsersList() {
  const [usersData, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState(false);

  useEffect(() => {
    setUsersLoading(true);
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) =>
        setTimeout(() => {
          setUsersLoading(false);
          setUsers(json);
        }, 3000)
      )
      .catch((err) => {
        setUsersLoading(false);
        setUsersError(true);
      });
  }, []);

  const renderUsers = () => usersData.map((user) => <div>{user.name}</div>);

  return (
    <>
      <h2>Użytkownicy</h2>
      {usersLoading && <div> Ładowanie danych</div>}
      {renderUsers()}
      {usersError && <div>Błąd pobierania danych</div>}
    </>
  );
}

export default UsersList;
