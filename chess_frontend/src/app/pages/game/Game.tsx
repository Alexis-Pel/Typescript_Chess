import './Game.css';
import { Chessboard } from 'react-chessboard';
import { useState } from 'react';
import { BoardOrientation, Piece, Square } from 'react-chessboard/dist/chessboard/types';
import axios from 'axios';
import Websocket from '../websocket-test';
import { useLocation } from 'react-router';
import io from 'socket.io-client';

const socket = io('http://10.160.33.161:3000');
// Avoid message repetition

function Game() {
  const [game, setGame] = useState();
  const [turn, setTurn] = useState('w');
  //const { state } = useLocation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get('id');

  let turnIAm: BoardOrientation = 'white';
  let match: any;
  let gameId: any;

  if (match == undefined) {
    try {
      gameId = state;
      getGame().then((value) => {
        match = value.data;
        turnIAm = match['players'].length == 1 ? 'white' : 'black';
        socket.emit('joinRoom', gameId);
      });
    } catch (e) {
      console.log(e);
      return (
        <div>
          <h1>Coucou</h1>
        </div>
      );
    }
  }
  async function getGame() {
    return await axios.get('http://10.160.33.161:3000/match/' + gameId);
  }

  if (game == undefined) {
    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://10.160.33.161:3000/game/games');
        return response.data.fen;
      } catch (error) {
        console.error(error);
      }
    };
    handleSubmit().then((r) => setGame(r));
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    console.log(turn, turnIAm);
    if (turn === turnIAm[0]) {
      const handleSubmit = async () => {
        const object = {
          fen: game,
          move: { from: sourceSquare, to: targetSquare, piece: piece },
        };
        try {
          const response = await axios.post('http://10.160.33.161:3000/game/moves', object);
          if (response.data != game) {
            socket.emit('move', response.data);
          }
          return response.data;
        } catch (error) {
          console.error(error);
        }
      };
      handleSubmit().then((r) => {
        setTurn(r.turn);
        setGame(r.fen);
      });
      return true;
    }
    return false;
  }

  // Avoid message repetition
  socket.on('move', (data: any) => {
    if (game != data) {
      setGame(data);
      if (turn == 'w') {
        setTurn('b');
      } else {
        setTurn('w');
      }
    }
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center' }}>
      <h1>{turn}</h1>
      <Chessboard
        id="StyledBoard"
        boardOrientation={turnIAm}
        boardWidth={400}
        position={game}
        onPieceDrop={onDrop}
        customDarkSquareStyle={{ backgroundColor: '#779952' }}
        customLightSquareStyle={{ backgroundColor: '#edeed1' }}
      />
    </div>
  );
}

export default Game;
