import { Router } from "express";
import * as taskController from "../controller/tasks";
const tasksRouter: Router = Router();

tasksRouter.get("/", taskController.getAllTasks);
tasksRouter.get("/:id", taskController.getTaskById);

export default tasksRouter;