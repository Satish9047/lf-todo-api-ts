import { Router} from "express";
import { tasksController } from "../controller/tasks.js";

const tasksRouter: Router = Router();

tasksRouter.get("/tasks", tasksController);

export default tasksRouter;