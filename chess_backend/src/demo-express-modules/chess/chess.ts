import type { Request, Response } from 'express';
import express from 'express';
import { Chess } from 'chess.ts';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/games', (req: Request, res: Response) => {
  const chess = new Chess();
  const fen = chess.fen();
  res.send({ fen });
});

app.post('/moves', (req: Request, res: Response) => {
  const fen = req.body.fen;
  const move = req.body.move;

  const chess = new Chess();
  chess.load(fen);
  chess.move(move);

  if (chess.gameOver())
    res.send({ fen: '0' });
  else
    res.send({ fen: chess.fen() })
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
