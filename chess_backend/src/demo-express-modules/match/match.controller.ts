import type { Request, Response } from "express";
import { createMatch, getMatch, getAllMatches } from "./match.service";

/* export function getMe(req: Request, res: Response) {
  res.json({ hello: 'World' })
} */

export async function postRegister(req: Request, res: Response) {
  const { body } = req;
  try {
    const result = await createMatch(body);
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: "cannot create user" });
  }
}

export async function getMatchById(req: Request, res: Response) {
  try {
    const response =  await getMatch(req.params.matchId);
    res.status(response['status']).json(response['message'])
  } catch (err) {
    res.status(400).json({ error: "cannot create user" });
  }
}

export async function getMatches(req: Request, res: Response) {
  try {
    const availableMatches = await getAllMatches();

    return res.json({
      matches: availableMatches,
    });
  } catch (err) {
    res.status(400).json({ error: "cannot create user" });
  }
}

/*
export async function getAllMatchForUser(req: Request, res: Response){
  const bearer = req.header('Authorization')
  try{
    return await getAllMatch(bearer)
  }
  catch (err){
    res.status(400).json({ error: 'cannot create user' })
  }
}
*/
