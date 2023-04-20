import './Game.css';
import { Chessboard } from 'react-chessboard';
import { useState } from 'react';
import { Square } from 'react-chessboard/dist/chessboard/types';

function Game() {
  const [game, setGame] = useState('');

  function onDrop(sourceSquare: Square, targetSquare: Square) {
    console.log(sourceSquare);
    console.log(targetSquare);
    return true;
  }
  return (
    <div>
      <Chessboard
        id="StyledBoard"
        boardOrientation="black"
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
