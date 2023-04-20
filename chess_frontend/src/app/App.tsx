import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './pages/login/Login';
import Game from './pages/game/Game';
import Lobby from './pages/lobby/Lobby';
import Dashboard from './pages/dashboard/Dashboard';
import Websocket from './pages/websocket-test';
import './App.css';
import Register from './pages/register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/game" element={<Game />} />
      <Route path="/Lobby" element={<Lobby />} />
      <Route path="/test" element={<Websocket />} />
    </Routes>
  );
}

export default App;
