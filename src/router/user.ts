import { Router} from "express";
import { userController } from "../controller/user.js";
const userRouter: Router = Router();


userRouter.get("/user", userController);

export default userRouter;