import { Router } from "express";
import { userController } from "../controller/user.js";
const userRouter = Router();
userRouter.get("/user", userController);
export default userRouter;
//# sourceMappingURL=user.js.map