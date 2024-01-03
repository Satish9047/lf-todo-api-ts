import { Router } from "express";
import * as authController from "../controller/auth";
import { loginAuth } from "../middleware/auth";

const authRouter: Router = Router();

//auth routes
authRouter.post("/login", loginAuth, authController.handleLogin);
authRouter.post("/register", authController.handleRegister);
authRouter.post("/refresh", authController.getRefreshToken);

export default authRouter;