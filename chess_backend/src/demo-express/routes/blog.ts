import { Router } from 'express';
import { PostBlog } from '../types/requests';

export const router = Router()

// GET http://localhost:8080/blog/2
// req.params.id = 2
router.get('/:id', (req, res) => {
  // req.query = url parameters like: /hello?mytest=world
  // req.query = { mytest: 'world' }
  const { query, params, body } = req;

  res.json({ hello: 'World' })
})

// POST http://localhost:8080/blog    data = { test: 42 }
router.post('/', (req: PostBlog, res) => {
  const { query, params, body } = req;
  // body = { test: 42 }

  res.json({ hello: 'World', body })
})

// GET http://localhost:8080/blog/2
router.delete('/user/:id', (req, res) => {
  // req.params = { id: '2' }

  res.json({ blogId: req.params.id })
})
