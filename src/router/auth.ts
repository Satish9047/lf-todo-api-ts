
import { Router } from "express";
const authRouter: Router = Router();
import * as authController from "../controller/auth";

// userRouter.get("/", userController.getAllUsers);
// userRouter.post("/login", userController.getLogin);
// userRouter.post("/register", userController.getRegister);
authRouter.post("/refresh", authController.getRefreshToken);
export default authRouter;