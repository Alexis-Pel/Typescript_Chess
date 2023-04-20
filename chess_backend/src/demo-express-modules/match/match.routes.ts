import { Router } from 'express'
import { getMatchById, postRegister } from "./match.controller";

export const router = Router()

// POST http://localhost:8080/user/register    data = { username: 'test', password: 'test' }
router.post('/', postRegister)

router.get('/:matchId', getMatchById)
