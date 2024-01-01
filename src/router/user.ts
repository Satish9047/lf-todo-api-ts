
import { Router } from "express";
const userRouter: Router = Router();
import * as userController from "../controller/user";

userRouter.get("/", userController.getAllUsers);

export default userRouter;