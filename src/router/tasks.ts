import { Router } from "express";
import * as taskController from "../controller/tasks";
const tasksRouter: Router = Router();

tasksRouter.get("/", taskController.getAllTasks);
tasksRouter.get("/:id", taskController.getTaskById);
tasksRouter.post("/", taskController.createTask);
tasksRouter.put("/:id", taskController.updateTask);
tasksRouter.delete("/:id", taskController.deleteTask);

export default tasksRouter;