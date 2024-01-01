
import { Router } from "express";
const userRouter: Router = Router();
import * as userController from "../controller/user";

userRouter.get("/", userController.getAllUsers);
userRouter.post("/login", userController.getLogin);
userRouter.post("/register", userController.getRegister);

export default userRouter;