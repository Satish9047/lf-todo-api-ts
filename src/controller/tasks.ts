import { Response, Request } from "express";
import * as taskService from "../service/tasks.js";

export const tasksController = async (req:Request, res:Response)=>{
    const data  = taskService.getAllTasks();
    return res.json(data);
};