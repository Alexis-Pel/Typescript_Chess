import './Game.css';
import { Chessboard } from 'react-chessboard';
import { useState } from 'react';
import { Square, Piece } from 'react-chessboard/dist/chessboard/types';
import axios from 'axios';
import Websocket from '../websocket-test';

function Game() {
  const [game, setGame] = useState();

  if (game == undefined) {
    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:3000/game/games');
        console.log(response.data); // Afficher la réponse du serveur
        return response.data.fen;
      } catch (error) {
        console.error(error);
      }
    };
    handleSubmit().then((r) => setGame(r));
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    const handleSubmit = async () => {
      const object = {
        fen: game,
        move: { from: sourceSquare, to: targetSquare, piece: piece },
      };
      try {
        console.log(object);
        const response = await axios.post('http://localhost:3000/game/moves', object);
        console.log(response.data); // Afficher la réponse du serveur
        return response.data.fen;
      } catch (error) {
        console.error(error);
      }
    };
    handleSubmit().then((r) => setGame(r));
    return true;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Chessboard
        id="StyledBoard"
        boardOrientation="black"
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
