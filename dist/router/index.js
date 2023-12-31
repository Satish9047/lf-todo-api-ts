import express from "express";
import tasksRouter from "./tasks.js";
import userRouter from "./user.js";
const router = express.Router();
router.get("/tasks", tasksRouter);
router.get("/user", userRouter);
export default router;
//# sourceMappingURL=index.js.map