import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-space-parakeet-6prv75ggp943r5wj-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-success text-white">
          <h1 className="card-title">Leaderboard</h1>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>API Endpoint: -8000.app.github.dev/api/leaderboard/</p>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
