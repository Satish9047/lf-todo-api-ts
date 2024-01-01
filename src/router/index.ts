import express from "express";
import tasksRouter from "./tasks";
import userRouter from "./user";

const router = express.Router();

router.use("/tasks", tasksRouter);
router.use("/users", userRouter);

export default router;

