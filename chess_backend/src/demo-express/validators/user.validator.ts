import { ajv } from './ajv';
import {JSONSchemaType} from 'ajv'
import { IUserLogin, IUserRegister } from '../types/dto/user.interface';

const userRegisterSchema: JSONSchemaType<IUserRegister> = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 8 },
    username: { type: "string", minLength: 4, maxLength: 12 }
  },
  required: ["email", "password", "username"],
  additionalProperties: false,
  errorMessage: {
    properties: {
      email: "email should be a valid email address",
      password: "password should be 8 characters minimum",
      username: "username should be between 4 and 12 characters"
    }
  }
}

const userLoginSchema: JSONSchemaType<IUserLogin> = {
  type: "object",
  properties: {
    password: { type: "string", minLength: 8 },
    username: { type: "string", minLength: 4, maxLength: 12 }
  },
  required: ["password", "username"],
  additionalProperties: false,
}

export const validateUserRegister = ajv.compile(userRegisterSchema)
export const validateUserLogin = ajv.compile(userLoginSchema)
