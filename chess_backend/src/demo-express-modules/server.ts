import express from 'express'
import { Server } from "socket.io";
import http from "http";
import { router as userRouter } from './user/user.routes'


export function initServer() {
  const app = express()
  app.use(express.json())

  /* Middleware, console.log each request */
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    console.log(req.method, req.path, +new Date())
    next()
  })

  // app.use('/blog', routerBlog)
  app.use('/user', userRouter)

  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
    }
  });

  server.listen(process.env.port || 3000, () => {
    console.log(`App running on port ${process.env.port || 3000}`);
  });

  //app.listen(8080, () => {
  //  console.log('Listening on http://localhost:8080')
  //})
  websocket(io);
  return app
}

function websocket(io: any){
  io.on('connection', (socket: any) => {
    socket.on('message', (data: any) => {
      console.log(`${data['username']}: ${data['message']}`);
      io.emit('message', `${data['username']}: ${data['message']}`);
    });

    socket.on('disconnect', () => {
      console.log('Un utilisateur s\'est déconnecté !');
    });
  });
}