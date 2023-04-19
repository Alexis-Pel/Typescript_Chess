import type { Request, Response } from 'express'
import { createMatch } from './match.service'

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
