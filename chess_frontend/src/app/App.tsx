import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './pages/login/Login';
import Game from './pages/game/Game';
import Lobby from './pages/lobby/Lobby';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/game" element={<Game />} />
      <Route path="/lobby" element={<Lobby />} />
    </Routes>
  );
}

export default App;
