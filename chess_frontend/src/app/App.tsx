import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/login/Login';
import Game from './pages/game/Game';
import Lobby from './pages/lobby/Lobby';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/game' element={<Game />}/>
      <Route path='/Lobby' element={<Lobby />}/>
    </Routes>
  );
}

export default App;
