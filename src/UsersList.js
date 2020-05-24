import React, { useState, useEffect } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
