import express from "express";
const uerRouter = express.Router();

import {login , signup, token} from "../controllers/user.js";

uerRouter.post('/signup', signup);
uerRouter.post('/login', login);
uerRouter.get('/tok', token);

export default uerRouter;

