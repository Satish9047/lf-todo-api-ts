import express from "express";
import tasksRouter from "./tasks";
import userRouter from "./user";
import authRouter from "./auth";
const router = express.Router();

//route handlers
router.use("/tasks", tasksRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;

