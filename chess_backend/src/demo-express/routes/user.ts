import { Router } from 'express';
import { validateBody } from '../middleware/validate-body';
import { validateUserRegister } from '../validators/user.validator';

export const router = Router()

// GET http://localhost:8080/user/me
router.get('/me', (req, res) => {

  res.json({ hello: 'World' })
})

// POST http://localhost:8080/user/register    data = { username: 'test', password: 'test' }
router.post('/register', validateBody(validateUserRegister), (req, res) => {
  const { body } = req;

  res.json({ hello: 'World', body })
})

// POST /user/login
router.post('/login', (req, res) => {
  const {  body } = req;

  res.json({ hello: 'World', body })
})
