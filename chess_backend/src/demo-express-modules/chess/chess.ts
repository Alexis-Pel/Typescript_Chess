import type { Request, Response } from 'express';
import express, { Router } from "express";
import { Chess } from 'chess.ts';

export const router = Router();
router.post('/games', (req: Request, res: Response) => {
  const chess = new Chess();
  const fen = chess.fen();
  res.send({ fen });
});

router.post('/moves', (req: Request, res: Response) => {
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
