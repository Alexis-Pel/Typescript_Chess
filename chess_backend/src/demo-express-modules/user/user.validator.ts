import type { JSONSchemaType } from "ajv";
import { ajv } from "../common/ajv";
import type { IUserLoginBody, IUserRegisterBody } from "./user.interface";

const userRegisterSchema: JSONSchemaType<IUserRegisterBody> = {
  type: "object",
  properties: {
    friends: {
      type: "array",
      items: {
        type: "object",
        properties: { username: { type: "string" } },
        required: ["username"],
        additionalProperties: false,
      },
    },
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 8 },
    username: { type: "string", minLength: 4, maxLength: 12 },
  },
  required: ["email", "password", "username"],
  additionalProperties: false,
  errorMessage: {
    properties: {
      friends: "Friend should be a valid username",
      email: "email should be a valid email address",
      password: "password should be 8 characters minimum",
      username: "username should be between 4 and 12 characters",
    },
  },
};

const userLoginSchema: JSONSchemaType<IUserLoginBody> = {
  type: "object",
  properties: {
    password: { type: "string", minLength: 8 },
    username: { type: "string", minLength: 4, maxLength: 12 },
  },
  required: ["password", "username"],
  additionalProperties: false,
};

export const validateUserRegister = ajv.compile(userRegisterSchema);
export const validateUserLogin = ajv.compile(userLoginSchema);
