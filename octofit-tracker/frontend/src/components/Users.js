import React, { useEffect, useState } from 'react';

const getApiUrl = () => {
  const base = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`;
  return `${base}/api/users/`;
};

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = getApiUrl();
    console.log('Fetching users from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Fetched users:', results);
        setUsers(results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.team?.name || 'No Team'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
