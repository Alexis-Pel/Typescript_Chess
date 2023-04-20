import express from 'express'
import { router as userRouter } from './user/user.routes'
import { router as matchRouter } from './match/match.routes'
// @ts-ignore
//import { checkToken } from "./token";

export function initServer() {
  const app = express()
  app.use(express.json())

  /* Middleware, console.log each request */
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
/*    const bearer = req.header('Authorization')
    // @ts-ignore
    if(req.path != '/user/login' && req.path != '/user/register' && req.path != '/'){
      if(bearer == undefined){
        res.redirect('/')
      }
      else{
        if(!checkToken(bearer)){
          res.redirect('/')
        }
      }
    }*/
    console.log(req.method, req.path, +new Date())
    next()
  })

  // app.use('/blog', routerBlog)
  app.use('/user', userRouter)
  app.use('/match', matchRouter)


  app.listen(8080, () => {
    console.log('Listening on http://localhost:8080')
  })

  return app
}
