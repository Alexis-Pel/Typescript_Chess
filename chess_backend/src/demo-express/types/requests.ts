import { Request } from 'express'
import { IPostBlog } from './dto/blog.interface'
import { IUserLogin, IUserRegister } from './dto/user.interface'

/* /user section */
export type PostRegister = Request<{}, {}, IUserRegister>
export type PostLogin = Request<{}, {}, IUserLogin>

/* /blog section */
export type PostBlog = Request<{}, {}, IPostBlog>
