import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App container my-4">
      <div className="app-header app-banner card shadow-sm mb-4">
        <div className="card-body d-flex align-items-center flex-column flex-md-row gap-3">
          <img src="/octofitapp-small.svg" alt="Octofit Tracker Logo" className="logo" />
          <div>
            <h1>Octofit Tracker</h1>
            <p className="mb-0">A beautiful fitness dashboard powered by React and Django REST API.</p>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4 shadow-sm">
        <div className="container-fluid px-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/activities">Activities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/teams">Teams</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/workouts">Workouts</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div className="card-custom p-4 text-center"><h2 className="page-title">Welcome to Octofit Tracker!</h2><p>Use the navigation menu to explore your API-backed fitness collections.</p></div>} />
      </Routes>
    </div>
  );
}

export default App;
