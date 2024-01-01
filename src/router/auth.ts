import { Router } from "express";
import * as authController from "../controller/auth";

const authRouter: Router = Router();

authRouter.post("/login", authController.handleLogin);
authRouter.post("/register", authController.handleRegister);
authRouter.post("/refresh", authController.getRefreshToken);

export default authRouter;