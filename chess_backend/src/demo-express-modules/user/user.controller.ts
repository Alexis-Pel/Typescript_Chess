import type { Request, Response } from 'express'
import { login, register, getMeService } from './user.service'
// @ts-ignore
import {checkToken} from "../token";

export async function getMe(req: Request, res: Response) {
  const token = req.header('Authorization')
  const response = await getMeService(token)
  console.log(response)
  res.status(response['status']).json(response)
}

export async function postRegister(req: Request, res: Response) {
  const { body } = req

  try {
    await register(body)
    res.json({ success: true })
  }
  catch (err) {
    res.status(400).json({ error: 'cannot create user' })
  }
}

export async function postLogin(req: Request, res: Response) {
  const { body } = req

  const response = await login(body)
  // do something with token ?
  // @ts-expect-error
  res.status(response.status).json(response)
}
