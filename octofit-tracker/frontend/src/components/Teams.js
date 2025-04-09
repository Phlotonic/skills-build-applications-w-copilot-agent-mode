import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-space-parakeet-6prv75ggp943r5wj-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-info text-white">
          <h1 className="card-title">Teams</h1>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team.id}>
                  <td>{team.id}</td>
                  <td>{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>API Endpoint: -8000.app.github.dev/api/teams/</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
