import type { IUserLoginBody, IUserRegisterBody } from './user.interface'

export function login(userData: IUserLoginBody) {
  // return a JWT token
  console.log(userData)
}

export function register(userData: IUserRegisterBody) {
  // do something to register the user
  console.log(userData)
}
