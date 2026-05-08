import React, { useEffect, useState } from 'react';

const getApiUrl = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const base = `https://${codespace}-8000.app.github.dev`;
  return `${base}/api/activities/`;
};

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const url = getApiUrl();
    console.log('Fetching activities from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Fetched activities:', results);
        setActivities(results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, i) => (
            <tr key={i}>
              <td>{a.type}</td>
              <td>{a.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
