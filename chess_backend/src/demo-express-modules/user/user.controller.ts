import { Request, Response } from 'express';
import { login, register } from './user.service';

export function getMe(req: Request, res: Response) {

  res.json({ hello: 'World' })
}

export async function postRegister(req: Request, res: Response) {
  const { body } = req;

  try {
    await register(body)
    res.json({ success: true })
  }
  catch (err) {
    res.status(400).json({ error: 'cannot create user' })
  }

}

export async function postLogin(req: Request, res: Response) {
  const { body } = req;

  const token = await login(body)
  // do something with token ?

  res.json({ token })
}
