import React, { useEffect, useState } from 'react';

const getApiUrl = () => {
  const base = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`;
  return `${base}/api/workouts/`;
};

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const url = getApiUrl();
    console.log('Fetching workouts from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Fetched workouts:', results);
        setWorkouts(results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Workouts</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w, i) => (
            <tr key={i}>
              <td>{w.name}</td>
              <td>{w.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
