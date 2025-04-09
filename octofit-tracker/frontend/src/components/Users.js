import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-space-parakeet-6prv75ggp943r5wj-8000.app.github.dev/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-warning text-dark">
          <h1 className="card-title">Users</h1>
        </div>
        <div className="card-body">
          <p>API Endpoint: -8000.app.github.dev/api/users/</p>
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
