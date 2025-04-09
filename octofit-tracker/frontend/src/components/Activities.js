import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-space-parakeet-6prv75ggp943r5wj-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h1 className="card-title">Activities</h1>
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
              {activities.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>API Endpoint: -8000.app.github.dev/api/activities/</p>
        </div>
      </div>
    </div>
  );
}

export default Activities;
