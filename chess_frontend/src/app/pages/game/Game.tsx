import './Game.css';
import { Chessboard } from 'react-chessboard';
import { useState } from 'react';
import { Square, Piece, BoardOrientation } from 'react-chessboard/dist/chessboard/types';
import axios from 'axios';
import Websocket from '../websocket-test';
import { useLocation } from 'react-router';

function Game() {
  const [game, setGame] = useState();
  const [turn, setTurn] = useState('w');
  const { state } = useLocation();
  let turnIAm: BoardOrientation = 'white';
  let match: any;
  let gameId: string;

  if (match == undefined) {
    try {
      gameId = state['id'];
      getGame().then((value) => {
        match = value.data;
        turnIAm = match['players'].length == 1 ? 'white' : 'black';
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
    const result = await axios.get('http://localhost:3000/match/' + gameId);
    return result;
  }

  if (game == undefined) {
    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:3000/game/games');
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
          const response = await axios.post('http://localhost:3000/game/moves', object);
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
      <Websocket />
    </div>
  );
}

export default Game;
