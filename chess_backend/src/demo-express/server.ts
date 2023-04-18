import express from 'express'
import { routerBlog, routerUser } from './routes'

export function initServer() {
  const app = express()
  app.use(express.json())

  /* Middleware, console.log each request */
  app.use((req, res, next) => {
    console.log(req.method, req.path, +new Date())
    next()
  })

  app.use('/blog', routerBlog)
  app.use('/user', routerUser)

  app.listen(8080, () => {
    console.log('Listening on http://localhost:8080');
  })

  return app;
}
