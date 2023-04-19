import { Router } from 'express'
import { postRegister } from './match.controller'

export const router = Router()

// POST http://localhost:8080/user/register    data = { username: 'test', password: 'test' }
router.post('/register', postRegister)
