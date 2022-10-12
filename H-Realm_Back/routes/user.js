import express from "express";
const userRouter = express.Router();

import {login , add, token, getUsers} from "../controllers/user.js";

userRouter.post('/register', add);
userRouter.post('/login', login);
userRouter.get('/tok', token);
userRouter.get('/', getUsers)

export default userRouter;

