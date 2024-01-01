
import { Router } from "express";
const authRouter: Router = Router();
import * as authController from "../controller/auth";


authRouter.post("/login", authController.handleLogin);
authRouter.post("/register", authController.handleRegister);
authRouter.post("/refresh", authController.getRefreshToken);
export default authRouter;