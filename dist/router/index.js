import { Router } from "express";
import tasksRouter from "./tasks.js";
import userRouter from "./user.js";
import config from "../config.js";
const router = Router();
router.use("/tasks", tasksRouter);
router.use("/user", userRouter);
router.get("/", (req, res) => {
    res.json({ message: `Server is running on port ${config.serverPort}` });
});
export default router;
//# sourceMappingURL=index.js.map