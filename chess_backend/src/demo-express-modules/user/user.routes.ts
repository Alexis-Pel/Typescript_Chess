import { Router } from "express";
import { validateBody } from "../common/validate-body";
import { validateUserRegister } from "./user.validator";
import { postLogin, postRegister, getMe, addFriend } from "./user.controller";

export const router = Router();

// GET http://localhost:8080/user/me
router.get("/me", getMe);

// POST http://localhost:8080/user/register    data = { username: 'test', password: 'test' }
router.post("/register", validateBody(validateUserRegister), postRegister);

// POST /user/login
router.post("/login", /* add validator login body here , */ postLogin);

router.post("/friend", addFriend);
