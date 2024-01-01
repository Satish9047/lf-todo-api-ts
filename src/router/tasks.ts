import { Router } from "express";
import * as taskController from "../controller/tasks";
const tasksRouter: Router = Router();

tasksRouter.get("/", taskController.getAllTasks);
tasksRouter.get("/:id", taskController.getTaskById);
tasksRouter.post("/add", taskController.createTask);
tasksRouter.put("/update/:id", taskController.updateTask);
tasksRouter.delete("/delete/:id", taskController.deleteTask);

export default tasksRouter;