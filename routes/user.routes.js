import { Router } from "express";
import { createUser, getUsers } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get('/users', getUsers);

userRouter.post('/user', createUser);

export default userRouter;