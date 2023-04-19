import type { Request, Response } from 'express'
import { createMatch, getMatch } from './match.service'

/* export function getMe(req: Request, res: Response) {
  res.json({ hello: 'World' })
} */

export async function postRegister(req: Request, res: Response) {
  const { body } = req
  try {
    await createMatch(body)
    res.json({ success: true })
  }
  catch (err) {
    res.status(400).json({ error: 'cannot create user' })
  }
}

export async function getMatchById(req: Request, res: Response){
  try{
    return await getMatch(req.params.toDoId)
  }
  catch (err){
    res.status(400).json({ error: 'cannot create user' })
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